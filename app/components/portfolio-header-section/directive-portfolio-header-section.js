PortfolioDirectives.directive('portfolioHeaderSection', function(){
	return {
		restrict: 'E',
		scope: {
			title:'@',
			subTitle:'@'
		},
		templateUrl: 'app/components/portfolio-header-section/directive-portfolio-header-section.html',
		link: function(scope,element, attrs){
			
			function init(){
				
				console.log('portfolio header section initialized');
			}

			init();

		}
	};
});
