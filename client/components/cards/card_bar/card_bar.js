Template.card_bar.events({
	'click .card': function() {
		FlowRouter.go('/workspace/bar');
		Session.set('asideLeft', null);
	}
});