Template.chart_line.onRendered(function() {
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
						begin: 50 * data.index,
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