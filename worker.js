export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (path.startsWith('/api/upvote/')) {
      return handleUpvote(request, env, ctx, path, corsHeaders);
    }

    // Serve blog content from GitHub Pages
    if (url.hostname === 'kohor.st' && (path === '/blog/' || path === '/blog' || path.startsWith('/blog/'))) {
      const blogUrl = request.url.replace('https://kohor.st', 'https://lucas-kohorst.github.io');
      return fetch(new Request(blogUrl, request));
    }

    // Only pass through to origin on custom domain (kohor.st), not on workers.dev
    if (url.hostname === 'kohor.st') {
      return fetch(request);
    }
    return new Response('Not Found', { status: 404 });
  }
};

async function handleUpvote(request, env, ctx, path, corsHeaders) {
  const slug = path.replace('/api/upvote/', '').replace(/\/$/, '');
  
  if (!slug) {
    return new Response(JSON.stringify({ error: 'Missing post slug' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }

  const countKey = `upvote:${slug}:count`;

  if (request.method === 'GET') {
    const count = await env.UPVOTE_DB.get(countKey);
    return new Response(JSON.stringify({
      count: parseInt(count) || 0
    }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }

  if (request.method === 'POST') {
    const current = parseInt(await env.UPVOTE_DB.get(countKey)) || 0;
    const newCount = current + 1;
    await env.UPVOTE_DB.put(countKey, newCount.toString());

    return new Response(JSON.stringify({
      count: newCount
    }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }

  return new Response('Method not allowed', { status: 405 });
}
