Meteor.startup(function () {
	sAlert.config({
		effect: 'slide',
		sAlertIcon: 'asterisk',
		position: 'bottom-right',
		timeout: 3000,
		html: true,
		onRouteClose: false,
		stack: true,
		offset: 75,
		stack: {
			spacing: 15, // in px
			limit: 3
		},
		beep: false,
		onClose: _.noop
	});
});

// Sample Alert
Template.navigation.events({
	'click .navigation--icons': function() {
		// sAlert.info({sAlertIcon: 'ion-information-circled', message: 'Hi there! I\'m an info notification :-)'});
		sAlert.success({sAlertIcon: 'ion-checkmark-circled', message: 'Hi there! I\'m a success notification :-)'});
	}
});