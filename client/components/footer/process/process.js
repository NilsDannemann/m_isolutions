Template.process.events({
	'click .process': function() {
		var asideBottom = Session.get('asideBottom');

		if (asideBottom == null) {
			Session.set('asideBottom', 'is-toggled');
		} else {
			Session.set('asideBottom', null);
		};
	}
});
Template.process.helpers({
	state: function(){
		return Session.get('asideBottom');
	}
});