const express = require("express")();
const cors = require("cors");

express.use(cors({
  allowedHeaders: "*",
  methods: "*",
  origin: "*"
}));

express.get("/api/imagens", (req, res) =>
  res.json(require("./dados"))
);

express.listen(8080, "localhost", () => {
  console.log("Servidor rodando.");
});