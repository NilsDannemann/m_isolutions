Template.navigation.events({
	'click .navigation--next': function() {
		var currentPatient = Session.get('currentPatient');
		var nextPatient = Patients.findOne({createdAt: {$lt: currentPatient.createdAt}}, {sort: {createdAt: -1}, limit:1});

		Session.set('currentPatient', nextPatient);
	},
	'click .navigation--prev': function() {
		var currentPatient = Session.get('currentPatient');
		var prevPatient = Patients.findOne({createdAt: {$gt: currentPatient.createdAt}}, {sort: {createdAt: 1}, limit:1});

		Session.set('currentPatient', prevPatient);
	}
});