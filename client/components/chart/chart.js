// Bar Chart
Template.barChart.onRendered(function() {
	this.autorun(function() {
		var currentPatient = Session.get('currentPatient');
		var data = {
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
			series: [
				currentPatient.dataset1,
				currentPatient.dataset2,
				currentPatient.dataset3
			]
		};
		var options = {
			seriesBarDistance: 12
		};
		var responsiveOptions = [
			['screen and (max-width: 650px)', {
				seriesBarDistance: 5,
				axisX: {
					labelInterpolationFnc: function (value) {
						return value[0];
					}
				}
			}]
		];

		// Create Chart
		var chart = new Chartist.Bar('#ct-bar-chart', data, options, responsiveOptions);

		// Animations
		// chart.on('draw', function(data) {
		// 	if(data.type === 'bar') {
		// 		data.element.animate({
		// 			d: {
		// 				begin: 250 * data.index,
		// 				dur: 250,
		// 				from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
		// 				to: data.path.clone().stringify(),
		// 				easing: Chartist.Svg.Easing.easeOutQuint
		// 			}
		// 		});
		// 	}
		// });
	});
});




// Line Chart
Template.lineChart.onRendered(function() {
	this.autorun(function() {
		var currentPatient = Session.get('currentPatient');
		var data = {
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
			series: [
				currentPatient.dataset1,
				currentPatient.dataset2,
				currentPatient.dataset3
			]
		};
		var options = {
			showArea: true
		};
		var responsiveOptions = [
			['screen and (max-width: 650px)', {
				seriesBarDistance: 5,
				axisX: {
					labelInterpolationFnc: function (value) {
						return value[0];
					}
				}
			}]
		];

		// Create Chart
		var chart = new Chartist.Line('#ct-line-chart', data, options, responsiveOptions);

		// Animations
		chart.on('draw', function(data) {
			if(data.type === 'line' || data.type === 'area') {
				data.element.animate({
					d: {
						begin: 150 * data.index,
						dur: 250,
						from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
						to: data.path.clone().stringify(),
						easing: Chartist.Svg.Easing.easeIn
					}
				});
			}
		});
	});
});

// Heat Line Chart
Template.heatLineChart.onRendered(function() {
	this.autorun(function() {
		var currentPatient = Session.get('currentPatient');
		var data = {
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
			series: [
				currentPatient.dataset1,
				currentPatient.dataset2,
				currentPatient.dataset3
			]
		};
		var options = {
			high: 12,
			low: 0,
			showArea: true,
			showLine: false,
			showPoint: false,
			fullWidth: true,
			axisX: {
				showLabel: false,
				showGrid: false
			}
		};
		var responsiveOptions = [
			['screen and (max-width: 650px)', {
				seriesBarDistance: 5,
				axisX: {
					labelInterpolationFnc: function (value) {
						return value[0];
					}
				}
			}]
		];

		// Create Chart
		var chart = new Chartist.Line('#ct-heat-line-chart', data, options, responsiveOptions);

		// Animations
		chart.on('draw', function(data) {
			if(data.type === 'line' || data.type === 'area') {
				data.element.animate({
					d: {
						begin: 150 * data.index,
						dur: 250,
						from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
						to: data.path.clone().stringify(),
						easing: Chartist.Svg.Easing.easeIn
					}
				});
			}
		});
	});
});
