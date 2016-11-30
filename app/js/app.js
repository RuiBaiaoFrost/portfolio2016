var trainsSchedule = angular.module('trainsSchedule', [
	'ngRoute',
	'TSControllers',
	'TSDirectives',
	'PortfolioServices'
]);

trainsSchedule.config(['$routeProvider', '$locationProvider', '$resourceProvider',
	function($routeProvider, $locationProvider, $resourceProvider ){

		$routeProvider
			.when('/', {
				title: 'Home',
				templateUrl: 'app/partials/home-page.html?' + APP_CACHE_SID,
				controller: 'HomePageController'
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