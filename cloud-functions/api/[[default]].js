// Node cloud function probe mounted at /api/*
export default function onRequest(context) {
  const url = new URL(context.request.url);
  return new Response(JSON.stringify({
    ok: true,
    probe: "cloud-functions/api/[[default]].js",
    seenPath: url.pathname,
    search: url.search,
    envKeys: context.env ? Object.keys(context.env) : []
  }, null, 2), {
    status: 200,
    headers: { "content-type": "application/json; charset=utf-8", "x-probe": "node-api" }
  });
}
