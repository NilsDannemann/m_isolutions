Meteor.startup(function () {
	Deps.autorun(function () {
		var currentPatient = Patients.findOne({});
		Session.set('currentPatient', currentPatient);
	});
});