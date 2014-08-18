var keystone = require('keystone'),
	Enquiry = keystone.list('Enquiry'),
	feed = require("feed-read");

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'onthewire';
	
	view.render('onthewire');
	
};
