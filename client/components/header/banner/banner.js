Template.banner.helpers({
	// State
	state: function(){
		return Session.get('asideTop');
	},
	// Patient
	firstname: function() {
		var currentPatient = Session.get('currentPatient');
		return currentPatient.firstname;
	},
	lastname: function() {
		var currentPatient = Session.get('currentPatient');
		return currentPatient.lastname;
	},
	phone: function() {
		var currentPatient = Session.get('currentPatient');
		return currentPatient.phone;
	},
	email: function() {
		var currentPatient = Session.get('currentPatient');
		return currentPatient.email;
	},
	country: function() {
		var currentPatient = Session.get('currentPatient');
		return currentPatient.country;
	},
	lastExamination: function() {
		var currentPatient = Session.get('currentPatient');
		return currentPatient.lastExamination;
	},
	nextExamination: function() {
		var currentPatient = Session.get('currentPatient');
		return currentPatient.nextExamination;
	},
	status: function() {
		var currentPatient = Session.get('currentPatient');
		return currentPatient.status;
	},
	condition: function() {
		var currentPatient = Session.get('currentPatient');
		return currentPatient.condition;
	},
	payment: function() {
		var currentPatient = Session.get('currentPatient');
		return currentPatient.payment;
	},
	transaction: function() {
		var currentPatient = Session.get('currentPatient');
		return currentPatient.transaction;
	}
});