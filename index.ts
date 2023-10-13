import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      const body = figlet.textSync("Hello, world!");
      return new Response(body);
    }

    if (url.pathname === "/about") {
      return new Response("About me!");
    }

    if (url.pathname === "/contact") {
      return new Response("Contact us");
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
