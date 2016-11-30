PortfolioDirectives.directive('portfolioSearchBar', function(){
	return {
		restrict: 'E',
		scope: {
			criteria:'=',
			searchPlaceholder:'@'
		},
		templateUrl: 'app/components/portfolio-search-bar/directive-portfolio-search-bar.html',
		link: function(scope,element, attrs){
			
			function init(){
				
				console.log('search bar initialized', scope.criteria);
			}

			init();

		}
	};
});