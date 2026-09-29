// EdgeOne Pages Edge Function probe (official doc style)
export function onRequest(context) {
  const url = new URL(context.request.url);
  return new Response(JSON.stringify({
    ok: true,
    probe: "edge-functions/index.js",
    seenPath: url.pathname,
    search: url.search,
    envKeys: context.env ? Object.keys(context.env) : [],
    clientIp: context.clientIp || null
  }, null, 2), {
    status: 200,
    headers: { "content-type": "application/json; charset=utf-8", "x-probe": "root-index" }
  });
}
