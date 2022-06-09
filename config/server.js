/* importar o modulo do framework express*/
const express = require('express');
/* importar o modulo do consign*/
const consign = require('consign');
/* importar o modulo do body-parse*/
const bodyParser = require('body-parser');
/* importar o modulo do express-vqalidator */
const expressValidator = require('express-validator');

/* iniciar o objeto express*/
const app = express();

/* setar as variaveis 'view engine' e 'views' do express*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parse **/
app.use(bodyParser.urlencoded({extended: true}));

/*configurar middleware express-validator*/
app.use(expressValidator());
/* faz o autoload da rotas, dos models e dos controllers para o objeto app */
consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);

/* iexportar o objeto app*/
module.exports = app;
