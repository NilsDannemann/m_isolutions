Meteor.startup(function() {
	// Define seed
	Factory.define('patient', Patients, {
		photo: function() {
			return faker.random.arrayElement(["patient1.jpg", "patient2.jpg", "patient3.jpg", "patient4.jpg", "patient5.jpg"]);
		},
		firstname: function() {
			return faker.name.firstName();
		},
		lastname: function() {
			return faker.name.lastName();
		},
		phone: function() {
			return faker.phone.phoneNumber();
		},
		email: function() {
			return faker.internet.email();
		},
		country: function() {
			return faker.address.country();
		},
		lastExamination: function() {
			return faker.date.month();
		},
		nextExamination: function() {
			return faker.date.month();
		},
		status: function() {
			return faker.random.number();
		},
		condition: function() {
			return faker.hacker.noun();
		},
		payment: function() {
			return faker.finance.amount();
		},
		transaction: function() {
			return faker.finance.transactionType();
		},
		dataset1: function() {
			return faker.helpers.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		},
		dataset2: function() {
			return faker.helpers.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		},
		dataset3: function() {
			return faker.helpers.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		},
		createdAt: function() {
			return faker.date.between('2016-01-01', '2014-12-31');
		}
	});

	// Optional: Remove all before seeding 
	Patients.remove({});

	// Start seeding
	if (Patients.find({}).count() === 0) {
		_(300).times(function(n) {
			Factory.create('patient');
		});
	}
});