Template.card_table.events({
	'click .card': function() {
		FlowRouter.go('/workspace/table');
		Session.set('asideLeft', null);
	}
});