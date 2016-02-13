Meteor.startup(function() {
	// Define seed
	Factory.define('patient', Patients, {
		firstname: function() {
				return faker.name.firstName();
		},
		lastname: function() {
				return faker.name.lastName();
		},
		status: function() {
				return faker.random.number();
		},
		condition: function() {
				return faker.lorem.words();
		}
	});

	// Optional: Remove all before seeding 
	Patients.remove({});

	// Start seeding
	if (Patients.find({}).count() === 0) {
		_(1000).times(function(n) {
			Factory.create('patient');
		});
	}
});