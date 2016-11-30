var PortfolioDirectives = angular.module('PortfolioDirectives', ['ngResource']);

PortfolioDirectives
.directive('tsDateFormatter', function(){
	return {
		restrict: 'A',
		template: '',
		link: function(scope,element, attrs){
			var d = new Date(0);
			d.setUTCSeconds(attrs['tsDateFormatter']);
			var hours = d.getHours(),
			minutes = d.getMinutes();

			var ampm = (hours >= 12) ? 'pm' : 'am';
			hours = hours % 12;
			hours = (hours) ? hours : 12; //hour 0 should be 12
			minutes = (minutes < 10) ? '0' + minutes : minutes;
			var strTime = (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear() + ' ' + hours + ':' + minutes + ' ' + ampm;

			element.html(strTime);
		}
	};
});

