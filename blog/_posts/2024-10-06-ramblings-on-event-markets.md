# Ramblings on Event Markets

*Originally posted at [Adjacent Press](https://press.adjacentresearch.xyz/p/ramblings-on-event-markets)*

## Overview

Prediction markets have a very interesting history. Not sure if this is the first that they were ever written about but [Robin Hanson](https://en.wikipedia.org/wiki/Robin_Hanson) is generally seen as the father of prediction markets. He first wrote about them in [Idea Futures](https://mason.gmu.edu/~rhanson/ideafutures.html) in which he describes how policy makers should turn to betting markets rather than experts for decision making (later this became [Futarchy](https://mason.gmu.edu/~rhanson/futarchy.html)).

[Here is a list](https://mason.gmu.edu/~rhanson/ifpubs.html) of many more Hanson publications.

A few years after Hanson's initial Idea Futures post [multiple big corporations picked up the idea](https://marginalrevolution.com/marginalrevolution/2004/07/idea_futures_in.html). Companies like Microsoft, Eli Lilly, and Hewlett-Packard have run experiments in which employees trade around new drug candidates, approval of drugs, etc.

Google [ran internal prediction markets](https://googleblog.blogspot.com/2005/09/putting-crowd-wisdom-to-work.html) to "forecast product launch dates, new office openings, and many other things of strategic importance to Google". After 2 years of continually running their markets [Using Prediction Markets to Track Information Flows](https://static.googleusercontent.com/media/services.google.com/en//blog_resources/google_prediction_market_paper.pdf) was released, detailing many biases and outcomes. They have their application public on [GitHub](https://github.com/google/arithmancer).

Even crazier in 2005 the Pentagon set up a prediction market website in which [terrorist attacks and assassinations](https://www.wired.com/2003/07/the-case-for-terrorism-futures/) were traded.

> The Pentagon is setting up a stock-market style system in which investors would bet on terror attacks, assassinations and other events in the Middle East. Defense officials hope to gain intelligence and useful predictions while investors who guessed right would win profits.

Prediction markets have gone through many iterations been tried in a number of applications from private corporations, open on blockchains, to the government.

Although, outside of U.S. election cycles and certain internal company markets they have never really caught much mainstream interest. Liquidity, Regulation, Duration of the predictions all play into this.

Sports betting on the other hand has always been popular and with recent regulation changes seen tremendous growth. Sports betting benefits from short duration bets and "always on" liquidity provided by the *House*.

Sports betting and prediction markets are one in the same, they are both *Event Markets*.

## Forecasting Events

The idea of forecasting events has been very popular with the [EA](https://orgs.law.harvard.edu/effectivealtruism/about-us/about-effective-altruism/) (effective altruism) community for a while and now more so with the [e/acc](https://www.lesswrong.com/posts/2ss6gomAJdqjwdSCy/what-s-the-deal-with-effective-accelerationism-e-acc) (effective accelerationism) community. Basically the [slate star codex](https://slatestarcodex.com/) / [astral codex ten](https://www.astralcodexten.com/), [scott alexander](https://twitter.com/slatestarcodex), [LessWrong](https://www.lesswrong.com/) type.

> While different than EA, e/acc seemingly only became [popular and mainstream](https://archive.is/4VwWG) after [SBF ruined](https://www.notion.so/Ramblings-on-Event-Markets-2e6ec476b29f4afba8889ad883e8b309) the EA name in 2022. Notably SBF offered conditional markets on FTX and FTX's Future Fund made donations to the popular prediction market manifold.markets.

The forecasting community is niche but very popular. In fact prediction market site [manifold.markets](http://manifold.markets) recently held their first conference Manifest. Here is some coverage on it in the [New York Times](https://web.archive.org/web/20240327065531/https://www.nytimes.com/2023/10/08/technology/prediction-markets-manifold-manifest.html).

[Superforecasting](https://www.penguinrandomhouse.com/books/227815/superforecasting-by-philip-e-tetlock-and-dan-gardner/) by [Philip E. Tetlock](https://www.penguinrandomhouse.com/authors/2129963/philip-e-tetlock) and [Dan Gardner](https://www.penguinrandomhouse.com/authors/76389/dan-gardner) details the government funded [Good Judgment Project](https://en.wikipedia.org/wiki/The_Good_Judgment_Project). The yearly tournament poses between 100 and 150 questions on geo-politics*. You can join challenges at [gjopen.com/challenges](https://www.gjopen.com/challenges), some of them have close to 100k forecasters participating.

Far easier to follow is the Annual Forecasting Contest held by [Astral Codex Ten](https://www.astralcodexten.com/). In this contest a variety of 50 questions were asked. Rather than yes/no the questions asked for a probability that an event happened. [Here](https://www.astralcodexten.com/p/who-predicted-2023) are the results from the 2023 competition. I look forward to these competitions each year.

Forecasting for the most part is pure reputation based and forecasters take pride in getting probabilities exactly right year after year.

Of course there are individuals that want to wager actual money on their bets, thus there are a variety of prediction markets (which of course bring traders, funds, etc.).

There is not a better overall prediction market FAQ than this one from astral codex [astralcodexten.com/p/prediction-market-faq](https://www.astralcodexten.com/p/prediction-market-faq). It would be a helpful read before continuing, why they are accurate, clever use cases, and common objectives are covered in it.

## Futarchy and Impact Markets

I first read about this ideal in [Radical Markets](https://press.princeton.edu/books/hardcover/9780691177502/radical-markets) (here's a pretty good [summary](https://medium.com/@ryanavent_93844/a-brief-ish-review-of-radical-markets-6454ba0637a8)) which among other things (like [Harberger Tax's](https://medium.com/@simondlr/what-is-harberger-tax-where-does-the-blockchain-fit-in-1329046922c6) and [Quadratic Voting](https://www.radicalxchange.org/concepts/plural-voting/)) the concept of a Futarchy is presented.

Robin Hanson describes the ability to vote on your values, but to bet on your beliefs in his post on [Futarchy](https://mason.gmu.edu/~rhanson/futarchy.html). The idea is simple in a Futarchy government betting markets would say what policies are past and what we do. Hanson expands on this in the paper [Shall we Vote on Values, But Bet on Beliefs](https://mason.gmu.edu/~rhanson/futarchy2013.pdf).

> In "futarchy," we would vote on values, but bet on beliefs. Elected representatives would formally define and manage an after-the-fact measurement of national welfare, while market speculators would say which policies they expect to raise national welfare.

Here's a [podcast transcript](https://www.richardhanania.com/p/futarchy-robin-hanson-on-how-prediction) of Hanson detailing Futarchy in 2021. It is worth a read.

The two largest scale examples of a Futarchy are [GnosisDAO](https://medium.com/@gnosisPM/announcing-gnosisdao-595f75776eab) and [MetaDAO](https://app.themetadao.org/) (follow [futarchy.guide](https://futarchy.guide/) if you are curious) both of which are blockchain based DAOs. Outside of onchain examples it's quite hard to find physical real-life examples. In 2021 Vitalik wrote about a few [here](https://vitalik.eth.limo/general/2021/10/31/cities.html) but none of them really seemed to take shape. I feel like [Zuzalu](https://www.zuzalu.city/dashboard/home) (a "pop-up" city launched with help from Vitalik) or [Praxis](https://www.praxisnation.com/) both have a good shot at being one of the first to do so. (65% chance if Praxis actually launches or in one of the next Zuzalu cohorts either experiment with governance like this)

Impact markets on the other hand have seen decent traction. Generally impact markets allow for a fund of money to be distributed across a set of projects / initiatives according to various voting types. Sometimes there is matching (see [Gitcoin Quadratic Funding](https://www.gitcoin.co/blog/gitcoin-grants-quadratic-funding-for-the-world)) other times it's based just on individual contributions. If you want to explore impact markets, social impact bonds, and retroactive funding, I highly suggest diving into [impartial-priorities.org/toward-impact-markets](https://impartial-priorities.org/toward-impact-markets.html) along with [Impact Markets the Annoying Details](https://www.astralcodexten.com/p/impact-markets-the-annoying-details).

There are a variety of funds like

- [Impact Market](https://www.impactmarket.com/)
- [Astral Codex Ten Impact Fund](https://forum.effectivealtruism.org/posts/6LppWMdN2NLHceGTr/impact-markets-the-annoying-details)
- [Manifund](https://mani.fund/)

and they have actually funded some pretty interesting and impactful things. For example in 2024 [ACX was able to fund](https://www.astralcodexten.com/p/acx-grants-results-2024) research on lead-acid battery recycling in Nigeria, the building of anti-mosquito drones, and the use of ultraviolet lightbulbs to kill airborne germs.

## News driven by Markets

One of the most exciting areas of prediction markets to me is the idea to drive news based on actual market odds. I first saw this in the [baseratetimes.com](https://www.baseratetimes.com/). With the slogan of *News through prediction markets* they aggregate odds across various markets, pair the event with news articles from popular sites and report the actual odds.

Given sites like [Kalshi](https://kalshi.com/) have predicted events like Fed rate cuts more accurate than CME Fed watch and better than most analysts, news driven by odds can give highly accurate news.

On prediction site [manifold.markets](http://manifold.markets)'s public roadmap they are considering ["newsifying" manifold](https://www.notion.so/Newsifying-Manifold-3eccf8e8b31042e99966d70b250c0ee2) along with the ability to [view prediction markets through tweets](https://www.notion.so/Twitter-strategy-Prediction-market-news-through-tweets-as-a-product-8d1b5352cb734a9dabc7282013b705c8) (most of us get our news through twitter anyway).

It seems like there is still a gap in predictions into news in actually generating content, assigning probabilities and creating an entire news organization based on the public market.

## Prediction Market Construction

### Problems

Designing a prediction market is quite interesting especially relative to traditional markets. Prediction Markets are binary options they resolve to one or another outcome. Due to this they often struggle to garner decent liquidity. A good thought exercise is what would have happened DraftKings launched without being the house, I bet they wouldn't have had as successful of a time with their sportsbook.

Once again Robin Hanson has a good take in his [Issues in information market design](https://mason.gmu.edu/~rhanson/infomkts.html)

> Sidenote: I feel like prediction markets have bad marketing, information market or event exchanges seems nicer

He details some problems are

- Markets need to reach a critical mass of traders to be "accurate" only a handful of traders won't tell you much and is easily manipulated
- Event and price manipulation, insiders can easily manipulate an event their way (this is actually a good case for regulation)
- Settlement, for sports markets money-lines are easy, did the Mavericks win last night? For some events the settlement outcomes can get muddied and the rules need to be hyper specific
- It can be very hard to gain interest in trading both sides of a market, tough to attract market makers, and thus liquidity becomes a problem. Hanson details a solution in [Combinatorial Information Market Design](https://mason.gmu.edu/~rhanson/combobet.pdf)

### Design

When considering constructing a prediction market there is a lot to consider

- Will you use real money? Tokens? What about regulation?
- How will traders interact with your market? Via an Automated Market Maker, an Orderbook, RFQ/OTC?
- What source will your outcomes settle against?
- How will you support new markets? Will you support single/one-off events? What about series events? At what frequency?

After re-launching an internal market during COVID-19 in 2020, Google details what it takes to operate a prediction market in [creating a prediction market](https://cloud.google.com/blog/topics/solutions-how-tos/design-patterns-in-googles-prediction-market-on-google-cloud). They mention the primary goal of a prediction market is to "incentivize the right people to forecast accurately, thereby producing a consensus forecast that is more accurate than any individual". In order to do so they make the case of good UX, incentives, and strong feedback loops. In my mind we have not reached good UX until its not uncommon to overhear something like "let me tail your interest rate bet for next month". Prediction markets need to have a similar appeal to sports betting.

More tactically there have been many attempts at differentiated prediction market design

- [Gnosis](https://gnosis.io/) launched [Omen](https://omen.eth.link/) and [conditional tokens](https://docs.gnosis.io/conditionaltokens/) with the idea that a token has (2) components YES and NO, you can mint a token and sell your NO shares to exclusively have YES exposure to the event. These tokens can trade on any exchange as they are ERC-20. This is very much so the Augur design (which was [shut down in 2020](https://www.coindesk.com/tech/2020/07/28/5-years-after-launch-predictions-market-platform-augur-releases-version-2/))
- [Polymarket](https://polymarket.com/) first launched with an [AMM](https://legacy-docs.polymarket.com/getting-started/redeeming-shares) which somewhat worked. If you already dislike impermanent loss wait till you try liquidity providing something that has an expiration date (like a binary option). [Polymarket](https://polymarket.com/) now has an orderbook. (Sidenote: [primitive.xyz](http://primitive.xyz/) has an interesting approach on AMMs for assets with time bounds, read [RMM-01](https://www.primitive.xyz/papers/Whitepaper.pdf))
- Most other markets [Kalshi](https://kalshi.com/) implement a standard orderbook

The orderbook versus automated market maker debate is something I have been interested in for a while, see [Ramblings on AMMs and Orderbooks](https://adjacentresearch.substack.com/p/ramblings-on-amms-and-orderbooks) and [Ramblings on DeFi Derivatives](https://adjacentresearch.substack.com/p/ramblings-on-defi-derivatives) so we will detail these designs more.

#### Orderbooks

A majority of prediction markets today use an orderbook. Makers post bids and asks which is filled by takers just like your traditional markets. Orderbooks are always the best option in large cap, very liquid markets. They facilitate the tightest spreads and give the most flexibility to traders.

Given how nascent many of these markets are the spreads are often enormous 10-15% isn't unheard of. Prediction market exchanges often need to have their own market making group to make the markets decent to trade on. For example [Kalshi](https://kalshi.com/) has a Kalshi Trading arm. With more clarity on regulation (CFTC regulated markets really helps) more traders and more liquidity will help facilitate tighter spreads. In the future maybe we see niche market making firms exclusively focus on trading prediction markets.

#### Automated Market Makers

When a market is new, niche, small and low liquidity often utilizing an AMM curve can be very helpful. Liquidity providers generally provide passive liquidity to an AMM allowing traders to always have a price to sell into (Just in Time liquidity is also a thing).

For a new meme coin AMMs can make a lot of sense and a super basic constant product function (CFMM) likely fits the use case well. For market's that have fixed bounds (0 / NO and 100 / yes) this doesn't make as much sense. [Here](https://timroughgarden.github.io/fob21/reports/ZLRL.pdf) is good paper on impermanent loss in CFMM's like Augur look like.

After the launch of [Uniswap V3](https://uniswap.org/whitepaper-v3.pdf) and the introduction of concentrated liquidity prediction market teams (along with many other teams) began exploring what event trading would look like. This is detailed in the [Maniswap V3](https://www.notion.so/Maniswap-V3-f619ffcb5cd540888fc31d164446a952) design document where they explore binning Uniswap's ticks to match discrete percentage increments.

[manifold.markets](http://manifold.markets) recently put out a fantastic overview comparing [different liquidity solutions](https://www.notion.so/Liquidity-solutions-compared-34c0ec79f55c41a9be573c4c88dff13e) in it they compare orderbook, CFMM, and concentrated liquidity approaches with and without fees.

With the success of various vAMM based perpetual DEXs like [drift.trade](http://drift.trade/), [perp.com](http://perp.com/), and up and coming [overlay.market](https://overlay.market/) it feels like one might be able to launch a successful prediction market on the same model.

Something notable across all prediction markets is the lack of leverage available. If you want to make a $100 prediction on something 12mos in the future that $100 is locked up for 12mos. This is something [interestingly noted](https://www.notion.so/Leveraged-Prediction-Markets-4700ed623ec84f958fc6b781c2a65501) in [compound.vc](https://www.compound.vc/)'s thesis development sheet. The ability to have leverage in prediction markets (like most other markets's) would lead to better capital efficiency for the end user and likely more longer term bets.

> Yet another FTX aside, in September 2023 Bitmex launched prediction markets for recovery rate of FTX funds, SBF's sentencing, and approval of the BTC ETF.

## Comparison to Sports Betting

Sports betting has been popular for a long time ([especially in Australia](https://theconversation.com/40-years-of-legal-sports-betting-in-australia-points-to-risks-for-us-gamblers-and-tips-for-regulators-194993) about [$34b wagered annually](https://www.asgam.com/index.php/2023/08/02/wagering-wars/)) but with recent regulation shifts in the US betting is on pace to hit over [$100b in wagers](https://frontofficesports.com/u-s-sports-betting-on-pace-to-hit-100b-in-wagers/). It is a extremely large market.

The interesting thing with sports betting versus say a political prediction market like [betfair.com](https://www.betfair.com/) is that sports betting markets have a *House*. This is the casino, book, or company that runs the sports betting market.

The house includes what a *[Vig* or](https://www.forbes.com/betting/guide/vig/) *[House Edge](https://www.forbes.com/betting/guide/vig/)* to every line that they set. This is so they can turn a slight profit no matter the outcome of the bet.

> Example: Odds are 50:50 for a match so the American Odds should be +100 / -100. With the traditional vig you can expect to see these odds for a 50:50 match to be +110 / -110. That way books can guarantee a profit either way.

### Market

This is a weird difference from traditional markets in which there are (2) participants makers and takers where market makers fight to earn the spread between bids and asks and thus provide a tighter spread making the market more efficient.

In sports betting the House sets the spread statically and usually at 10% (!!).

[Novig](https://www.novig.us/) recently announced their [seed round](https://www.novig.us/articles/announcing-our-seed-round) to make sports betting markets function more similarly to traditional markets (only in Colorado for now). Rather having static house vig baked into the odds, [Novig](https://www.novig.us/) allows for any market participant to make or take orders on the exchange. The idea is that traditional market makers (Jane Street, Citadel, etc.) eventually will step in and make sports markets.

How odds are displayed between sports betting and prediction markets is also interesting. Sports betting generally follows American (+120), decimal (2.2), fraction (6/5) or implied (45.45%) odds. Anecdotally American odds seem to be the most popular among retail (especially as odds are now discussed by sports announcers and plastered over ESPN). Prediction markets on the other hand default to quoting in implied odds. Perhaps prediction markets could benefit from showing all (4) types of odds.

### Regulation

Another stark difference between prediction markets and sports betting is regulation. Sports betting is highly regulated state to state (full list of SEC rules [here](https://www.sec.gov/Archives/edgar/data/858339/000119312512115625/d268435dex993.htm), my favorite excerpt here is that riverboat casinos are also subject to US Coast Guard regulations). Prediction markets on the other hand have had a much harder go. [Kalshi](https://kalshi.com/) is the only prediction market so far to get [CFTC approval](https://kalshi.com/blog/article/kalshi-designation) for a variety of their markets (and they had to [raise $30m](https://www.businesswire.com/news/home/20210217005285/en/Kalshi-Raises-30-Million-in-Series-A-Funding-Led-by-Sequoia) to do so).

Even [Kalshi](https://kalshi.com/) is still in a regulatory battle, they are [suing the CFTC](https://www.reuters.com/world/us/predictions-market-kalshi-sues-cftc-blocking-election-contracts-2023-11-01/) for the blocking of various election markets. This is kinda crazy to me because look at this market for if the Boeing CEO is gone by the end of 2024 [rules](https://kalshi-public-docs.s3.amazonaws.com/contract_terms/BOEINGCEOCHANGE.pdf). How does that get approved but election markets don't.

It seems like traditional sports betting platforms might have a better go than prediction markets in actually launching prediction markets. Some stats sports books allow for political betting already.

See what Hanson had to say

> To get an Idea Futures market approved as a security in the US, you'd need CFTC approval. But they require expensive review, require you to set up a physical pit for trading there, and are sure that there is no point to markets where there is not substantial hedging demand. (Respected academics can sometimes get exceptions though.)

## Towards a Event Exchanges

I believe that either (1) someone will create an all-in-one *event exchange* or (2) a sports betting company will purchase/launch a prediction market and we will have a complete, fully featured market to trade the outcome of any event (70% chance either happens by 2026).

Eventually I see event exchange's markets referenced by the news in a way that benchmark prices are referenced from things like CME benchmarks (95% at least one major news outlet will regularly report sourcing a prediction market).

## Resources

Many more resources can be found in the following repository [https://github.com/0xperp/awesome-prediction-markets](https://github.com/0xperp/awesome-prediction-markets).