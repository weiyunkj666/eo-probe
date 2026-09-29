// Edge function probe mounted at /api/*
export function onRequest(context) {
  const url = new URL(context.request.url);
  return new Response(JSON.stringify({
    ok: true,
    probe: "edge-functions/api/[[default]].js",
    seenPath: url.pathname
  }, null, 2), {
    status: 200,
    headers: { "content-type": "application/json; charset=utf-8", "x-probe": "edge-api" }
  });
}
