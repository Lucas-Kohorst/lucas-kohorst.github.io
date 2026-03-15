# Ramblings on DeFi Derivatives

### perpetuals, options, swaps, and more

## Background

In the last year options protocols have grown from around $85m to over $1b in tvl, similarly perpetual swap trading platforms have seen quite the growth in trading volume from far less than $1b to coming close to clearing $10b in volume in a single day. Value locked and volumes traded will only increase in 2022 with new platforms and products being released practically weekly (as I'm writing this squeeth, zeta, invariant, and 01protocol all released or are releasing in next few days).

There have been several good writeups on defi derivatives and their outlook for 2022 here is a particularly good one from [jump trading](https://jumpcrypto.com/state-of-crypto-derivatives-market/).

In the post shanav highlights that if you take crypto options volume (this includes centralized exchanges as well) as a % of spot volume, options only make up 2% of total volume traded. Compare this to equity markets where options volume trades at a 35x multiple to spot volume. Crypto derivative markets have a massive growth opportunity in front of them and the growth is particularly in defi.

In the rest of the post I will detail types of derivatives and their implementation and design in DeFi. Along with innovations and what I am looking at next.

## Types

### Perpetuals

A product initially developed by [Bitmex](https://www.bitmex.com/app/perpetualContractsGuide) perp swaps have no expiry, and function similar to a spot margin account allowing for highly leveraged long/short trading.

Since perps have no expiry the concept of a funding rate is introduced to tether the price of the perp to the current spot price.

- Mark price refers to the current price of the perp
- Index price refers to the current spot price to tether to
- Negative funding rate shorts pay longs
- Positive funding rate longs pay shorts
- Funding rate is calculated by `funding_period * (mark - index) / index`

[Paradigm's cartoon guide to perps](https://research.paradigm.xyz/cartoon-guide-to-perps) also gives a very good explanation

Perps quickly have become the most liquid and favorite way to trade on centralized exchanges and are a hot topic to be built out in DeFi.

So far there have been about three different perp designs

- Orderbook + margin account
- vAMM
- Embedded funding rates

Using an orderbook and margin account mirrors a centralized exchange experience and this is what protocols like [Mango](https://docs.mango.markets/faqs/perp-faq) work. Trading on an orderbook is nice you can easily set limit orders, you trade directly with other counterparties, and for the protocol trading is very capital efficient (each trade is settled once it can be matched with a counterparty).

A vAMM based model can be extremely advantageous, for a trader there is always guaranteed liquidity since you are trading peer to pool, vAMMs can very easily be cross-margined with just about any asset since all of the trading is virtual.

The third design (which I have only seen [Opyn](https://opyn.co/) and Squeeth use) is embedding the funding rate into a parameter of asset. Known as **in-kind** funding Squeeth uses a normalization factor to settle funding between longs and shorts without ever having to manage a cash payment. Using in-kind funding is something that I think will become much more common management of funding was the largest limitation for perp composability. Since funding is handled in-kind Squeeth can be easily traded as an ERC20, used to LP, used as collateral on other defi platforms, and the list goes on.

### A quick aside on vAMM design

This does not entirely relate to perps (its about interest rate swaps actually), but [Voltz](https://www.voltz.xyz/) has increased the benefits of using a vAMM through a concept known as **LP Collateral Recycling**.

In Voltz example there are three users

- Fixed interest rate taker
- Variable interest rate taker
- Liquidity provider

If a fixed taker takes a trade that uses the LPs liquidity the LP is locked into the given swap at the rate the fixed taker took. But if a variable taker comes along and uses that same liquidity (the same rate) the positions can be netted out and the LP's collateral can be freed and reused. In turn making the protocol much more capital efficient (there is more free liquidity to trade through).

Even cooler this concept can be applied to most vAMMs. Imagining recycling within a perp vAMM is even easier, if traders have opposite positions on the same asset you could settle their trades "off the curve". Additionally this might be an interesting way to integrate limit orders. A trader sets their limit price and if there is another trader that has an open position on the other side it settles. If not the limit is open until it can be filled by the vAMM.

In a way this makes a vAMM function like a pseudo orderbook with pricing based off of a curve.

> These are all very raw thoughts, iterate, be wrong, and discuss

### Options

As referenced in the background of this options are only 2% of spot volume in crypto (note the majority of this 2% is centralized exchange volume **not** DeFi options), where in equity markets options volume trades at a 35x multiple to spot.

> This might not be the best comparison as crypto options trade much more like commodities than equities, but either way eye opening

Either DeFi and overall crypto options haven't fully been figured out yet or no one wants to trade them.

I'll take the former all day, right now it seems like DeFi options haven't entirely taken off due to fragmentation (more on this in the liquidity section), the design, and getting large funds and market makers to trade on various chains.

The leading option protocol is [Opyn](https://opyn.co/) along with pool based protocols like [Hegic](https://hegic.co/), [Pods](https://pods.finance/), [Lyra](https://lyra.finance/), and [Premia](https://premia.finance/). There was almost zero use of these protocols until option vaults landed early this year (there is an entire section dedicated to this below).

We have seen over a 10x increase in usage of onchain option protocols. I expect this growth to continue, especially as products become more cleanly packaged, capital efficient, and composable.

### Volatility

There have also been a decent amount of products in the market that package risk or volatility in a simple index. [Volmex](https://volmex.finance/) has seen the most traction as a way to trade an assets volatility index. Trading on Volmex is similar to trading on a prediction market like [Polymarket](https://polymarket.com/) or [Augur](https://www.augur.net/), you supply collateral and receive two tokens the IV index and its inverse. From here you can trade the volatility directionally how you choose.

I can see assets that Volmex offers to be interesting and attractive to traders, however I think they struggle from a nascent market.

In their methodology section of the docs, its described that the volatility index is taken from averages across call and put options sourced offchain from [Deribit](https://deribit.com/). While this solution works its not very decentralized or native to DeFi.

Although this is not the fault of Volmex. If there was a highly liquid onchain options market when they where designing their protocol they could have used that as a source rather than Deribit.

> Power perpetuals can be used as a volatility oracle, also check out oracle-free derivatives from Primitive and Antimatter

As derivatives markets are built out further, I will be watching for volatility products.

## Innovations

### Liquidity and Composability

Liquidity is by far the most important part to design for when creating a derivatives project, there are just so many ways it can be fragmented.

- Over chains
- Over protocols
- Over strikes
- Over expires

> A good thread detailing fragmentation in the options market

When option markets initially started to be designed on ethereum, the orderbook model was out of the question (still is on ethereum, but products like [Zeta](https://zeta.markets/) on Solana use it), and since AMMs worked so well for spot tokens many protocols began to develop an AMM or pool based model for trading options. Below are a few of the designs

- [Hegic V1](https://github.com/hegic/whitepaper/blob/master/Hegic%20Protocol%20Whitepaper.pdf)
  - Hegic works by having option writers function as liquidity providers to a pool in which they are locked for the options expiration
  - Hegic was the first to do this, and they have seen considerable first mover advantage
- [Hegic v888](https://github.com/hegic/Hegic-v8888-release-deck/blob/main/Hegic%20V8888%20Release%20Deck.pdf)
  - The v2 of Hegic, which introduced auto-exercising options, pools for both calls and puts, zero-loss pools (when you provide liquidity you can optionally hedge your liquidity)
- [Pods](https://www.pods.finance/pods_v1_whitepaper.pdf)
  - Pods released a great pool based options model in which the black scholes pricing model built into the AMM in which all that needs to be inputted is the IV
  - Right now each pool is a separate option series, but the Pods team is looking at how multiple option series could be in a single pool (see section 7 future work)
- [Premia](https://premia.finance/amm.pdf)
  - Premia has taken a lot of the options pool concepts to the next level, buyers can select your expiration date and strike price at a granular level and sellers (liquidity providers) can choose which markets they want to underwrite.
- [Lyra](https://www.lyra.finance/files/whitepaper.pdf)
  - Lyra functions with two pools, the collateral (writes the options) and the delta pool (hedges option writers delta). Lyra also uses market driven IV which is then inputted to the black-scholes model to determine the option price

All of the research that has gone into designing these protocols is very impressive but due to poor capital efficiency and often much higher prices compared to say Deribit most of these protocols have not seen significant volume compared to centralized counterparts.

Looking at [Pods](https://dune.xyz/momir/Pods-Finance) and [Premia's](https://dune.xyz/krugman/Premia-v2) total volume they have cleared less all time than Squeeth has in 2 weeks. Nothing against either team (I actually really enjoy reading their docs) but Squeeth has cleared more in volume in a fraction of the time because Squeeth has done away with 3/4 of the liquidity fragmentations. There is no expiry, no need to select a strike price, and due to built in funding rate (thanks to the normalization factor) Squeeth can be cross protocol.

More on Squeeth and power perpetuals later, but its important to know that cleanly packaging a payoff, in a perpetual, and composable fashion will always win out.

In addition to composable perpetuals like Squeeth and option based AMM formulas there has been significant research in using concentrated liquidity to form option payoffs.

If you are interested in this I suggest you read all ten articles from @guil_lambert starting with [Uniswap V3 LP Tokens as Perpetual Put and Call Options](https://lambert-guillaume.medium.com/uniswap-v3-lp-tokens-as-perpetual-put-and-call-options-5b66219db827), followed by the rest of the series. Following that go and play around with [info.yewbow.org](https://info.yewbow.org/#/) observe the volatility of each pool and visualize the payoff of your LPs

The top tier team at [Primitive](https://primitive.finance/) took this a step further and developed an entirely new protocol [RMM-01](https://primitive.finance/blog/introducing-primitive) which focuses on being a spot and derivative exchange through concentrated liquidity. If you are curious on how you can create a replicating portfolio from a constant product market I suggest you read the following

- [Replicating Market Makers](https://stanford.edu/~guillean/papers/rmms.pdf)
- [The Replicating Portfolio of a Constant Product Market](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3550601)
- [The Replicating Portfolio of a Constant Product Market with Bounded Liquidity](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3898384)
- [Replicating Monotonic Payoffs Without Oracles](https://arxiv.org/abs/2111.13740)

Having a spot and derivative exchange bundled in one unlocks tons of capital efficiency, allows for granular strike selection, automatically rolling expires when the AMM rebalances, and freedom to select your own quote and base asset.

But… there are always tradeoffs replicating an option with concentrated liquidity only allows you to replicate selling options and the premium yield relies on swap fees from those using the spot exchange or arbitrageurs. Yield being derived only from swap fees has two consequences, (1) no swaps or arbs occur in which you would not earn yield and (2) since yield is from swaps your premium is paid over time of the expiry and not given upfront.

There are a few solutions to these: if you want to have a long call payoff you could borrow a primitive position, if you want to have a somewhat guaranteed premium you could lend a primitive position

### The Vault Structure

A somewhat common and basic options strategy to generate additional yield on an asset by forgoing potential upside is known as a covered call strategy. There are plenty of good guides on how this works and the risk associated. The basics are you sell a far out of the money option on a regular cadence taking home the premium as yield and praying (or hopefully hedging) that prices do not rise enough for your calls to be excised.

Yield farming to earn 4 digit APYs is extremely lucrative, but not very sustainable by selling risk through options you will have a much lower but sustainable yield. These concepts are summed up nicely in [where does yield come from](https://juliankoh.medium.com/where-does-yield-come-from-anyway-fc818c114bd5) by [Ribbon](https://ribbon.finance/) co-founder @juliankoh.

The Ribbon team (and now a growing list of others) saw strategies like covered calls and yield vaults like [Yearn](https://yearn.finance/) as a perfect fit, and thus Option Vaults were formed.

Option vaults are simple, user deposits ETH and each week the ETH is used to collateralize 1w expiry and 0.1d options via oTokens using Opyn's Gamma protocol which are then sold to market makers via telegram and Airswap or through open access Gnosis auctions.

These vaults are somewhat of a win-win for all parties. Retail has a clean UX, simple, and easy way to generate constant yield. Sophisticated market makers can take advantage of the not very competitive option pricing and arb the prices across other option exchanges.

There has been a decent backlash to option vaults on twitter. All I'll say on this is option vaults are much more transparent in their onchain activities and structure its just really about communicating that risk to the retail investors using the platform. If you are marketing the option premiums as risk free yield then ya backlash is deserved.

Across all option vault protocols there is about $500m of short dated options being sold each week by DOVs, so much that they are starting to affect the skew

Some smart traders new this was coming, but I assume most did not. The Deribit insights thread was looking for can now be found here.

If you take away anything from this post, know that your yield will **always** be compressed even if it is "sustainable"

So far we have seen 40% interest rate on stablecoins, 4-5 figure APYs on the newest yield farm, very high double digit yields on option vaults, and (likely) will see large swings in negative funding via algorithmic stablecoin mints. And this is were things start getting cool… DeFi products affecting the overall crypto market structure (who would have thought back in 2019 when the entire space was sub $1m TVL).

But high tvl vault projects decimating your yield isn't the point of this post… so back to derivatives.

Another vault structure that is becoming more common is the basis trading vault. [UXD](https://uxd.fi/) and [Lemma](https://lemma.finance/) are leading the way. The basis trade is pretty simple especially when you are using perps.

- Notice that funding on your favorite perp protocol is positive (longs pay shorts)
- Spot long an asset
- Short the asset on the perp protocol
- Earn the funding rate while being delta neutral

*Of course you'll need to continually hedge your positions to keep your delta neutral*

UXD and Lemma run strategies on decentralized perp markets in a vault structure allowing anyone to invest. Additionally they mint a stablecoin against the position.

> Algorithmic stablecoins are another interesting DeFi concept, maybe will detail in a later post but for now this piece from Dragonfly and FRAX's docs on seniorage shares should get you started

As mentioned above a large influx in delta neutral backed stablecoins could push perp markets funding rates negative.

Understanding how these stables pay the negative funding is important (and directly affects your coins stability), generally this is paid through an insurance fund and if thats not enough governance tokens may be auctioned off (similar to Maker debt auctions).

However historically the basis trade has been really profitable

> Following a 2x long ETH-USDC on Perp and 2x short ETH-PERP in FTX would have yielded over 100% APR since the market was opened

### A quick aside on stablecoins and perps and what they can learn from one another

If your timeline over the past few weeks has been 75% about Squeeth like mine, then tweets around "everything being a perp" might have surfaced. Here are a few of them

- From Georgios
- From Dan
- Reference to RAI, from Charlie

*Note: all Paradigm*

Quick overview for MakerDAO and DAI is that DAI is an ETH margined USD perp

- DAI holders are long DAI
- Vault depositors are short DAI
- DAI price is the mark
- $1 is the index
- The DAI savings rate and stability fee act like a funding rate

On the RAI and Reflexer side the team has called themselves a stablecoin/perp, if you read closely on the RAI use cases you can see how RAIs redemption rate is similar to a funding rate.

> Another side note A Money God Rises, DAI purple paper, Rico are all good reads

You can read more about perps as stablecoins from a more technical side, written by Opyn, here.

And a final exercise to the reader from the above post

> This is a collateralized zero coupon bond -- the original stablecoin

Okay after that quick overview on how everything is a perp, what can perps learn from algorithmic stablecoins (this specifically applies to those built with an AMM for pricing)?

Designing a perp market has the benefit of using an AMM for pricing, most vAMM designs use the constant product formula `xy=k` which has worked quite well.

There have been plenty of iterations and new designs for AMMs for similarly priced assets and if you think of the mark and index of a perp as two separate like priced assets you can start to see how implementing a stableswap-like curve might allow for a perp to maintain a tighter peg.

Additionally almost all algorithmic stablecoins trade at a current value (the mark) and peg/target a rate of $1 (the index).

The FEI stablecoin initially had the concept of direct incentives, essentially as FEI deviated from its peg of $1 a reward/penalty would take place for a mint/burn. If FEI is trading at $0.98 minters earn 2% and burners are hit with a 4% penalty and vice versa. The trick here is that the farther FEI deviates from its peg the exponentially higher penalty.

> Note: that this did not work well for FEI and is since removed from the protocol

As much as direct incentives did not really work for FEI, it could be interesting to try in a perp context. As mark deviates from the index you quadratically scale up/down the funding rate. Doing so would hopefully attract for arbitrage opportunities and thus maintain a tighter mark/index peg.

Closing out this aside, I have a feeling that we will see algo stablecoin designs implemented in perps, and protocols described in the context of perps in the future.

### Power Perpetuals

Power perpetuals are perhaps one of the most interesting research topics and products to come out of defi derivatives. The core concept is simple, a power perp (for example ETH^2) tracks the price of ETH squared. If ETHs price rises by 200% ETH^2 rises by 400%, if ETH price goes down you loss less than you would through 2x constant leverage.

> Sidenote you should read: How to lose 99.9% and still score a 500x

Squeeth or any power perpetual can be used for a lot of different strategies, here is an initial list

- Longing Squeeth means you are long gamma, and is similar to holding a perpetual at the money call options
- Shorting Squeeth means you are short gamma, and is similar to selling a perpetual at the money straddle
- Hedging Options
- Hedging LP positions
- 1x Long ETH Exposure with a oSQTH:USDC LP
- 1.5x Long ETH Exposure with a oSQTH:ETH LP
- Usage as a Volatility oracle

I am extremely excited to see where power perps take us in 2022 simply because I know that the list above is just scratching the surface.

If you want to think about use cases I suggest reviewing Squeeth mental models and iterating from there.

It can also be helpful to know that holding Squeeth provides a similar payoff to holding an always at the money call (shorting is like an at the money straddle). However power perps are not limited to just thinking in the option space, it can also be compared to a perp swap and constant leverage (something like FLI).

## What's Next

This has already been a somewhat long post, so to end here is my shortlist of innovations I'll be looking at in 2022.

- **Iterations on power perps**
  
  Opyn laid it out nicely
  
  > A 0-perp is a stablecoin
  > A 1-perp is a future
  > Any p-perp that is not 0 or 1 is a volatility oracle
  > Power perps can be traded against fixed-expiry power futures
  > A 2-perp (squeeth) is an excellent hedge for options and constant function market makers such as Uniswap and Curve
  > A 0.5 perp (sqrth) is a perfect hedge for a Uniswap LP position and it's coming next!

- **An increased focus on composability**
  - I feel like many derivative designs have been optimizing for liquidity and the next step will be composability
  - I am looking at usage in other protocols, cross margined, (maybe) cross chain margin
- **Vaults for everyone**
  - Continue to create vault products that are accessible (but transparent) to all investors and allow them to participate in high payoff niche trading strategies

I have made hopefully comprehensive list of the DeFi derivatives landscape here: https://github.com/0xperp/defi-derivatives