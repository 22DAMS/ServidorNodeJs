const chalk = require("chalk");
const http = require("http");
const host = "localHost";
const PORT = 8000;

const listener = function (req, res) {
  const url = new URL(req.url, `http://${host}:${PORT}`);
  res.writeHead(200);
  res.write(
    JSON.stringify({
      nombre: "Danny Marin",
      mensaje: "Estoy haciendo un servidor con Node Js",
    })
  );
  res.end();
};

const servidor = http.createServer(listener);

servidor.listen(PORT, host, () => {
  console.log(chalk.green(`Servidor corriendo en ${host}:${PORT}`));
});
