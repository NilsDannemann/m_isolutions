Template.card_line.events({
	'click .card': function() {
		FlowRouter.go('/workspace/line');
		Session.set('asideLeft', null);
	}
});