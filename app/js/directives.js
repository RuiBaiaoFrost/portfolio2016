var TSDirectives = angular.module('TSDirectives', ['ngResource']);

TSDirectives
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
})
.directive('portfolioNavigationBar', function(){
	return {
		restrict: 'E',
		scope: {

		},
		templateUrl: 'app/partials/portfolio-navigation-bar.html',
		link: function(scope,element, attrs){
			
			function init(){
				console.log('nav initialized');
			}

			init();

		}
	};
})
.directive('portfolioSearchBar', function(){
	return {
		restrict: 'E',
		scope: {
			criteria:'=',
			searchPlaceholder:'@'
		},
		templateUrl: 'app/partials/portfolio-search-bar.html',
		link: function(scope,element, attrs){
			
			function init(){
				
				console.log('search bar initialized', scope.criteria);
			}

			init();

		}
	};
})
.directive('photoGallery', function(){
	return {
		restrict: 'E',
		scope: {
			gallery:'=',
			locationFilterName:'='
		},
		templateUrl: 'app/partials/photo-gallery.html',
		link: function(scope,element, attrs){
			
			function init(){
				
				console.log('photo gallery initialized', scope.locationFilterName);
			}

			init();

		}
	};
})
.directive('portfolioHeaderSection', function(){
	return {
		restrict: 'E',
		scope: {
			title:'@',
			subTitle:'@'
		},
		templateUrl: 'app/partials/portfolio-header-section.html',
		link: function(scope,element, attrs){
			
			function init(){
				
				console.log('portfolio header section initialized', scope.locationFilterName);
			}

			init();

		}
	};
});