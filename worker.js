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

    if (path.match(/^\/blog\/[^\/]+\.md$/)) {
      return handleMarkdown(path, corsHeaders);
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

async function handleMarkdown(path, corsHeaders) {
  const slug = path.replace('/blog/', '').replace('.md', '');
  
  const listResponse = await fetch('https://api.github.com/repos/Lucas-Kohorst/lucas-kohorst.github.io/contents/_posts');
  if (!listResponse.ok) {
    return new Response('Not Found', { status: 404 });
  }
  
  const files = await listResponse.json();
  const match = files.find(f => f.name.includes(slug));
  
  if (!match) {
    return new Response('Not Found', { status: 404 });
  }

  const rawResponse = await fetch(match.download_url);
  if (!rawResponse.ok) {
    return new Response('Not Found', { status: 404 });
  }
  
  const markdown = await rawResponse.text();

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      ...corsHeaders
    }
  });
}
