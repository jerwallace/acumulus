var keystone = require('keystone'),
	Enquiry = keystone.list('Enquiry'),
	client = require('share').client;

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;

	// Open the 'hello' document, which should have type 'text':
	client.open('hello', 'text', {host: 'localhost', port: 8000}, function(doc, error) {
	    // Insert some text at the start of the document (position 0):
	    doc.submitOp({i:"Hi there!\n", p:0});

	    // Get the contents of the document for some reason:
	    console.log(doc.snapshot);

	    doc.on('change', function(op) {
	        console.log('Version: ' + doc.version);
	    });

	    // Close the doc if you want your node app to exit cleanly
	    // doc.close();
	});
	
	// Set locals
	locals.section = 'create';
	view.render('create');
	
};
