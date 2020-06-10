const express = require("express");
const server = express();

//configurar pasta public
server.use(express.static("public"));

// utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// configurar caminhos
//pagina inicial
//Req: requisicao
//Res: resposta
server.get("/", function (req, res) {
  res.render("index.html");
});
server.get("/create-point", (req, res) => {
  res.render("create-point.html");
});
server.get("/search-results", (req, res) => {
  res.render("search-results.html");
});

const port = process.env.PORT || 2000;

// liga servidor
server.listen(port, console.log("server is running"));
