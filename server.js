const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');

app.get("/sse", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Access-Control-Allow-Origin": "*",
  });
  setInterval(() => {
    res.write(`data: ${faker.image.avatar()}\n\n`);
  }, 1000);
});
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
