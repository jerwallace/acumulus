var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Contributor Model
 * ==========
 */

var Contributor = new keystone.List('Contributor');

Contributor.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Contributor.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


/**
 * Relationships
 */

Contributor.relationship({ ref: 'Post', path: 'author' });


/**
 * Registration
 */

Contributor.defaultColumns = 'name, email, isAdmin';
Contributor.register();
