const express = require("express");
const server = express();
const port = process.env.PORT || 3000;

const dateService = require("./src/dateService");

server.get("/dateTime", (req, res) => {
  return res.json(dateService.getCurrentTime());
});

server.listen(port, () => {
  console.log("servidor funcionando");
});
