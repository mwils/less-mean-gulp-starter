module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/index.*', function(req, res) {
		res.sendfile('./build/index.html');
	});

};