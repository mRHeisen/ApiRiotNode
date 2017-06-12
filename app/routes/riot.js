module.exports = function(app){

	var api = app.api.riot;
	
     app.route('/v1/invocador')
        .get(api.buscaInvocador);

     app.route('/v1/campeos')
        .get(api.buscaCampeos);

     app.route('/v1/stats')
        .get(api.buscaStats);       
};