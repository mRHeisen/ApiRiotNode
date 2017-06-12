//Modulo do express de configuração
var express = require('express');
//Consig requerido para ser utilizado
var consign = require('consign');
//bodyParser requerido para ser utilizado
var bodyParser = require('body-parser');
// Solicita ao módulo Express a criação de uma instância do framework que ficará acessível através da variável app.
var app = express();
// Usa o middlewares que ja vem no express Static tudo que tiver na pasta indicada sera acessivel pelo navegador
//variavel de ambiente do express
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Location, Authorization');
    res.setHeader('Access-Control-Expose-Headers', 'Location');
    next();
});
app.use(express.static('./src'));
// Usa o middlewares bodyParser para popular o req.body
app.use(bodyParser.json());
//Carrega todas arquivos que tem em models/api/routes e passa como parametro a instancia app com express configurado
// cwd diretorio pradao do consign
consign({ cwd : 'app'})
	.then('api')
	.then('routes')
	.into(app);

//Seleciona o que voce deseja tonar publico desse modulo para outros usarem com (Require)
module.exports = app; 