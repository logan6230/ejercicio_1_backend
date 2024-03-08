const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});

app.get("usuarios", (req, res) => {});

app.post("/productos", (req, res) => {
  res.send("hola");
});
// Middlware
app.use((req, res, next) => {
  console.log("Solicitud recibida", req.method, req.url);
  next();
});

// plantillas
// Integra un motor de plantillas para renderizar HTML dinamicamente:
// Instala un motor de plantillas (por ejemplo, index.pug)
// Utiliza la funcion del motor de plantillas para renderizar la plantilla con datos

const path = require("path");
app.set('views', path.join(__dirname, 'views')):
app.set('view engine', 'pug');
app.get('/', (req, res) =>{
  res.render('index', {
    title: 'Mi página',
    message: '¡Hola, mundo!'
  });
});
