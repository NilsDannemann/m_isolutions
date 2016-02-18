Template.navigation.events({
	'click .icon--navigation-next': function() {
		var currentPatient = Session.get('currentPatient');
		var nextPatient = Patients.findOne({createdAt: {$lt: currentPatient.createdAt}}, {sort: {createdAt: -1}, limit:1});

		Session.set('currentPatient', nextPatient);
	},
	'click .icon--navigation-prev': function() {
		var currentPatient = Session.get('currentPatient');
		var prevPatient = Patients.findOne({createdAt: {$gt: currentPatient.createdAt}}, {sort: {createdAt: 1}, limit:1});

		Session.set('currentPatient', prevPatient);
	},
	'click .navigation__options--left': function() {
		sAlert.info({sAlertIcon: 'ion-information-circled', message: 'This Feature is not implemented yet'});
	},
	'click .navigation__options--right': function() {
		sAlert.info({sAlertIcon: 'ion-information-circled', message: 'This Feature is not implemented yet'});
	}
});