export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Headers comunes (CORS + JSON)
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    // Manejo de preflight (CORS)
    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    // Endpoint: /
    if (url.pathname === "/") {
      return new Response(
        JSON.stringify({ message: "API funcionando 🚀" }),
        { headers }
      );
    }

    // Endpoint: /message
    if (url.pathname === "/message") {
      return new Response(
        JSON.stringify({ message: "Backend listo!" }),
        { headers }
      );
    }

    // Endpoint: /random
    if (url.pathname === "/random") {
      const uuid = crypto.randomUUID();
      return new Response(
        JSON.stringify({ uuid }),
        { headers }
      );
    }

    // Si no existe la ruta
    return new Response(
      JSON.stringify({ error: "Not found" }),
      { status: 404, headers }
    );
  }
};