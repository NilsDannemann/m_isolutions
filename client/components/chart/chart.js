Template.chart.onRendered(function () {
	var data = {
	  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	  series: [
	    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
	    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
	    [2, 3, 2, 5, 6, 8, 8, 7, 10, 9, 11, 11]
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

	new Chartist.Bar('.ct-chart', data, options, responsiveOptions);
});
