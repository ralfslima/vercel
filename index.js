// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { engine } = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('principal');
});

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});