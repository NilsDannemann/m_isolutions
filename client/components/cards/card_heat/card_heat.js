Template.card_heat.events({
	'click .card': function() {
		FlowRouter.go('/workspace/heat');
		Session.set('asideLeft', null);
	}
});