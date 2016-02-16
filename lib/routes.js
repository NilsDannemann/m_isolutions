FlowRouter.route('/', {
	// Setup
	subscriptions: function() {
		this.register('Patients', Meteor.subscribe('Patients'));
	},
	// Actions
	action: function() {
		BlazeLayout.render('layout_main', {
			headerTop: 'navigation',
			headerMain: 'banner',
			headerBottom: 'filter',

			workspaceLeft: 'measure',
			workspaceMain: 'view',
			workspaceRight: 'therapy',

			footerMain: 'process'
		});
	}
});


// Routes - Workspace
var workspaceRoutes = FlowRouter.group({
	prefix: '/workspace'
});
// ../workspace
workspaceRoutes.route('/', {
	// Actions
	action: function() {
		BlazeLayout.render('layout_main', {
			headerTop: 'navigation',
			headerMain: 'banner',
			headerBottom: 'filter',

			workspaceLeft: 'measure',
			workspaceMain: 'view',
			workspaceRight: 'therapy',

			footerMain: 'process'
		});
	}
});
// ../workspace/bar
workspaceRoutes.route('/bar', {
	action: function() {
		BlazeLayout.render('layout_main', {
			headerTop: 'navigation',
			headerMain: 'banner',
			headerBottom: 'filter',

			workspaceLeft: 'measure',
			workspaceMain: 'chart_bar',
			workspaceRight: 'therapy',

			footerMain: 'process'
		});
	}
});
// ../workspace/line
workspaceRoutes.route('/line', {
	action: function() {
		BlazeLayout.render('layout_main', {
			headerTop: 'navigation',
			headerMain: 'banner',
			headerBottom: 'filter',

			workspaceLeft: 'measure',
			workspaceMain: 'chart_line',
			workspaceRight: 'therapy',

			footerMain: 'process'
		});
	}
});
// ../workspace/heat
workspaceRoutes.route('/heat', {
	action: function() {
		BlazeLayout.render('layout_main', {
			headerTop: 'navigation',
			headerMain: 'banner',
			headerBottom: 'filter',

			workspaceLeft: 'measure',
			workspaceMain: 'chart_heat',
			workspaceRight: 'therapy',

			footerMain: 'process'
		});
	}
});
// ../workspace/table
workspaceRoutes.route('/table', {
	action: function() {
		BlazeLayout.render('layout_main', {
			headerTop: 'navigation',
			headerMain: 'banner',
			headerBottom: 'filter',

			workspaceLeft: 'measure',
			workspaceMain: 'table',
			workspaceRight: 'therapy',

			footerMain: 'process'
		});
	}
});