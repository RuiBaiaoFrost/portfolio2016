var trainsSchedule = angular.module('trainsSchedule', [
	'ngRoute',
	'PortfolioControllers',
	'PortfolioDirectives',
	'PortfolioServices'
]);

trainsSchedule.config(['$routeProvider', '$locationProvider', '$resourceProvider',
	function($routeProvider, $locationProvider, $resourceProvider ){

		$routeProvider
			.when('/', {
				title: 'Home',
				templateUrl: 'app/partials/page-home.html?' + APP_CACHE_SID,
				controller: 'HomePageController'
			})
			.when('/youtube', {
				title: 'Home',
				templateUrl: 'app/partials/page-youtube.html?' + APP_CACHE_SID,
				controller: 'YoutubePageController'
			})
			.when('/about', {
				title: 'Home',
				templateUrl: 'app/partials/page-about.html?' + APP_CACHE_SID,
				controller: 'AboutPageController'
			})
			.when('/contacts', {
				title: 'Home',
				templateUrl: 'app/partials/page-contact.html?' + APP_CACHE_SID,
				controller: 'ContactsPageController'
			})
			
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);


}]);

var APP_CACHE_SID = (new Date()).getTime();

var APP_DEBUG = true;

//Log function
window.log = function(){
	if(!APP_DEBUG) return;
	log.history = log.history || [];
	log.history.push(arguments);
	if(this.console){
		console.log(Array.prototype.slice.call(arguments));
	}
};