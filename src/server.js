import http from "node:http";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;
  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST" && url === "/tasks") {
    if (!req.body) {
      res.writeHead(400);
      return res.end(JSON.stringify("O corpo da requisição é nulo"));
    }

    if (req.body.title) {
      res.writeHead(400);
      return res.end(JSON.stringify("O titulo da tarefa é necessário"));
    }

    if (req.body.description) {
      res.writeHead(400);
      return res.end(JSON.stringify("A descrição da tarefa é necessário"));
    }
  }
});

server.listen(3333);
