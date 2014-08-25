var keystone = require('keystone'),
	Enquiry = keystone.list('Enquiry'),
	ace = require('ace');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
	
	// Set locals
	locals.section = 'create';
	view.render('create');
	
};
