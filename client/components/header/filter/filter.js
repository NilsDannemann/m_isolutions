Template.filter.events({
	'click .filter__toggle--left': function() {
		var asideLeft = Session.get('asideLeft');

		if (asideLeft == null) {
			Session.set('asideLeft', 'is-toggled');
		} else {
			Session.set('asideLeft', null);
		}; 
	},
	'click .filter__toggle--right': function() {
		var asideRight = Session.get('asideRight');

		if (asideRight == null) {
			Session.set('asideRight', 'is-toggled');
		} else {
			Session.set('asideRight', null);
		};
	}
});