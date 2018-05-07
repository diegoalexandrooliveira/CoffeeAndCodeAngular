const express = require("express")();
const cors = require("cors");

express.use(cors({ allowedHeaders: "*", methods: "*", origin: "*" }));
express.get("/api/imagens", (req, res) => {
  let imagens = require("./dados");
  return res.json(imagens);
});

express.listen(8080, "localhost", () => {
  console.log("Servidor rodando.");
});
