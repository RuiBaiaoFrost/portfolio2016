PortfolioDirectives.directive('portfolioNavigationBar', function(){
	return {
		restrict: 'E',
		scope: {
			page: '@'
		},
		templateUrl: 'app/components/portfolio-navigation-bar/directive-portfolio-navigation-bar.html',
		link: function(scope,element, attrs){
			
			function init(){
				console.log('nav initialized');
			}

			init();

		}
	};
});
