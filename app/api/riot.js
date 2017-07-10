var https =  require('https');
//Cria objeto javaScrpit em branco
var api = {};

const API_KEY = 'RGAPI-4dee1f0b-2371-4a20-bb7c-84d93a020bae';

//busca Todos campeos
api.buscaCampeos = function(req, res){
	var riotApiCampeos ='/lol/static-data/v3/champions?api_key='+API_KEY;
	var options = {
		host: 'br1.api.riotgames.com',
		path: riotApiCampeos,
		port: 443,
		headers: {
			'Content-Type': 'application/json',
		}
	};
	var request = https.request(options, function(response)
	{
			var output = '';
			console.log(options.host + ':' + response.statusCode);
			response.setEncoding('utf8');
			response.on('data', function (chunk) {
					output += chunk;
			});
			response.on('end', function() {
					var obj = JSON.parse(output);
					res.json(obj);
			});
	});
	request.on('error', function(err) {
			//res.send('error: ' + err.message);
	});
	request.end();
};
//busca stats pelo nome id do invocador
api.buscaStats = function(req, res){
	var idInvicador = req.query.id;
	const riotApiStats = '/api/lol/br/v1.3/stats/by-summoner/'+idInvicador+'/ranked?season=SEASON2017&api_key='+API_KEY
	var options = {
		host: 'br1.api.riotgames.com',
		path: riotApiStats,
		port: 443,
		headers: {
			'Content-Type': 'application/json',
		}
	};
	var request = https.request(options, function(response)
	{
			var output = '';
			console.log(options.host + ':' + response.statusCode);
			response.setEncoding('utf8');
			response.on('data', function (chunk) {
					output += chunk;
			});
			response.on('end', function() {
					var obj = JSON.parse(output);
					res.json(obj);
			});
	});
	request.on('error', function(err) {
			//res.send('error: ' + err.message);
	});
	request.end();
};
//busca invocador pelo nome
api.buscaInvocador = function(req, res){
	var nomeInvocador = req.query.nome;
	var riotApiInvocador = '/lol/summoner/v3/summoners/by-name/'+nomeInvocador+'?api_key='+API_KEY;
	var options = {
		host: 'br1.api.riotgames.com',
		path: riotApiInvocador,
		port: 443,
		headers: {
			'Content-Type': 'application/json',
		}
	};
	var request = https.request(options, function(response)
	{
			var output = '';
			console.log(options.host + ':' + response.statusCode);
			response.setEncoding('utf8');
			response.on('data', function (chunk) {
					output += chunk;
			});
			response.on('end', function() {
					var obj = JSON.parse(output);
					res.json(obj);
			});
	});
	request.on('error', function(err) {
			//res.send('error: ' + err.message);
	});
	request.end();
};

module.exports = api;