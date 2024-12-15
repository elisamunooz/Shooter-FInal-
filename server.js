const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sirve los archivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Ruta base
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Aplicación corriendo en http://localhost:${port}`);
});
