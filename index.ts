import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const body = figlet.textSync("This is my first web server with Bun!");
    return new Response(body);
  },
});

console.log(`Server running at http://localhost:${server.port}`);
