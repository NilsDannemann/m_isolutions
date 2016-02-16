// Keys
Mousetrap.bind('shift+i', function() { 
	sAlert.info({sAlertIcon: 'ion-checkmark-circled', message: 'You\'ve pressed shift + i' });
});
Mousetrap.bind('shift+s', function() { 
	sAlert.success({sAlertIcon: 'ion-checkmark-circled', message: 'You\'ve pressed shift + s' });
});

// Arrows
Mousetrap.bind('m', function() {
	var asideLeft = Session.get('asideLeft');

	if (asideLeft == null) {
		Session.set('asideLeft', 'is-active');
	} else {
		Session.set('asideLeft', null);
	};
});
Mousetrap.bind('t', function() { 
	var asideRight = Session.get('asideRight');

	if (asideRight == null) {
		Session.set('asideRight', 'is-active');
	} else {
		Session.set('asideRight', null);
	};
});
Mousetrap.bind('b', function() { 
	var asideTop = Session.get('asideTop');

	if (asideTop == null) {
		Session.set('asideTop', 'is-active');
	} else {
		Session.set('asideTop', null);
	};
});
Mousetrap.bind('p', function() { 
	var asideBottom = Session.get('asideBottom');

	if (asideBottom == null) {
		Session.set('asideBottom', 'is-active');
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