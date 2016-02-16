FlowRouter.route('/', {
	// Subscriptions
	subscriptions: function() {
		this.register('Patients', Meteor.subscribe('Patients'));
	},
	// Actions
	triggersEnter: function() {},
	action: function() {
		BlazeLayout.render("layout_main", {
			headerTop: 'navigation',
			headerMain: 'banner',
			headerBottom: 'filter',

			workspaceLeft: 'measure',
			workspaceMain: 'view',
			workspaceRight: 'therapy',

			footerMain: 'process'
		});
	},
	triggersExit: function() {}
});