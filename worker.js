export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // GET /api/upvote/:post - Get upvote count
    if (request.method === 'GET' && url.pathname.startsWith('/api/upvote/')) {
      const postPath = url.pathname.replace('/api/upvote/', '');
      const upvotes = await env.UPVOTE_DB.get(postPath);
      return new Response(
        JSON.stringify({ upvotes: parseInt(upvotes) || 0 }),
        { headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // POST /api/upvote - Increment upvote
    if (request.method === 'POST' && url.pathname === '/api/upvote') {
      const { post } = await request.json();
      const current = await env.UPVOTE_DB.get(post) || '0';
      const newUpvotes = parseInt(current) + 1;
      await env.UPVOTE_DB.put(post, newUpvotes.toString());
      return new Response(
        JSON.stringify({ upvotes: newUpvotes }),
        { headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    return new Response('Not Found', { status: 404 });
  }
};
