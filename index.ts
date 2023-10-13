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

    // handle errors
    if (url.pathname === "/error") {
      throw new Error("Something went wrong");
    }

    return new Response("Not found", { status: 404 });
  },
  error(error) {
    return new Response(`<pre> ${error} \n ${error.stack} </pre>`, {
      headers: { "Content-type": "text/html" },
    });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
