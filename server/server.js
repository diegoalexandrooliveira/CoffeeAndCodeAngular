const express = require("express")();
const cors = require("cors");

express.use(cors({ allowedHeaders: "*", methods: "*", origin: "*" }));
express.get("/api/dados", (req, res) => {
  let dados = require("./dados");
  return res.json(dados);
});

express.listen(8080, "localhost", () => {
  console.log("Servidor rodando.");
});
