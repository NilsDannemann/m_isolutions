// Keys
Mousetrap.bind('shift+i', function() { 
	sAlert.info({sAlertIcon: 'ion-checkmark-circled', message: 'You\'ve pressed shift + i' });
});
Mousetrap.bind('shift+s', function() { 
	sAlert.success({sAlertIcon: 'ion-checkmark-circled', message: 'You\'ve pressed shift + s' });
});

// Arrows
Mousetrap.bind('shift+left', function() { 
	sAlert.success({sAlertIcon: 'ion-checkmark-circled', message: 'You\'ve pressed shift + reft' });
});
Mousetrap.bind('shift+right', function() { 
	sAlert.success({sAlertIcon: 'ion-checkmark-circled', message: 'You\'ve pressed shift + right' });
});
Mousetrap.bind('shift+up', function() { 
	sAlert.success({sAlertIcon: 'ion-checkmark-circled', message: 'You\'ve pressed shift + up' });
});
Mousetrap.bind('shift+down', function() { 
	sAlert.success({sAlertIcon: 'ion-checkmark-circled', message: 'You\'ve pressed shift + down' });
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