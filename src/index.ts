/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		const url = new URL(request.url);
// 		switch (url.pathname) {
// 			case '/message':
// 				return new Response('Hello, World 2!');
// 			case '/random':
// 				return new Response(crypto.randomUUID());
// 			default:
// 				return new Response('Not Found', { status: 404 });
// 		}
// 	},
// } satisfies ExportedHandler<Env>;

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (url.pathname === "/") {
      return new Response(
        JSON.stringify({ message: "API funcionando 🚀" }),
        { headers }
      );
    }

    if (url.pathname === "/message") {
      return new Response(
        JSON.stringify({ message: "Backend listo!" }),
        { headers }
      );
    }

    if (url.pathname === "/random") {
      return new Response(
        JSON.stringify({ uuid: crypto.randomUUID() }),
        { headers }
      );
    }

		if (url.pathname === "/test") {
      return new Response(
        JSON.stringify("test"),
        { headers }
      );
    }

    return new Response(
      JSON.stringify({ error: "Not found" }),
      { status: 404, headers }
    );
  }
};
