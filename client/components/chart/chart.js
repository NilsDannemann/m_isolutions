// Bar Chart
Template.barChart.onRendered(function() {
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
	new Chartist.Bar('#ct-bar-chart', data, options, responsiveOptions);
});

// Line Chart
Template.lineChart.onRendered(function() {
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
	new Chartist.Line('#ct-line-chart', data, options, responsiveOptions);
});

// Heat Line Chart
Template.heatLineChart.onRendered(function() {
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
	new Chartist.Line('#ct-heat-line-chart', data, options, responsiveOptions);
});
