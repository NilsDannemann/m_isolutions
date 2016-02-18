// Keys
Mousetrap.bind('v d', function() { 
	FlowRouter.go('/');
});
Mousetrap.bind('v l', function() { 
	FlowRouter.go('/workspace/line');
});
Mousetrap.bind('v b', function() { 
	FlowRouter.go('/workspace/bar');
});
Mousetrap.bind('v h', function() { 
	FlowRouter.go('/workspace/heat');
});
Mousetrap.bind('v t', function() { 
	FlowRouter.go('/workspace/table');
});


// Arrows
Mousetrap.bind('ctrl+shift+left', function() {
	var asideLeft = Session.get('asideLeft');

	if (asideLeft == null) {
		Session.set('asideLeft', 'is-toggled');
	} else {
		Session.set('asideLeft', null);
	};
});
Mousetrap.bind('ctrl+shift+right', function() { 
	var asideRight = Session.get('asideRight');

	if (asideRight == null) {
		Session.set('asideRight', 'is-toggled');
	} else {
		Session.set('asideRight', null);
	};
});
Mousetrap.bind('ctrl+shift+up', function() { 
	var asideTop = Session.get('asideTop');

	if (asideTop == null) {
		Session.set('asideTop', 'is-toggled');
	} else {
		Session.set('asideTop', null);
	};
});
Mousetrap.bind('ctrl+shift+down', function() { 
	var asideBottom = Session.get('asideBottom');

	if (asideBottom == null) {
		Session.set('asideBottom', 'is-toggled');
	} else {
		Session.set('asideBottom', null);
	};
});

// multiple combinations to same callback
// Mousetrap.bind(['command+p', 'ctrl+p'], function() {
// 	console.log('command p or control p');

// 	// return false to prevent default browser behavior
// 	return false;
// });

// sequences
// Mousetrap.bind('g i', function() { 
// 	console.log('go to inbox'); 
// });