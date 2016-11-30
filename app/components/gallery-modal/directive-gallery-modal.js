PortfolioDirectives.directive('galleryModal', function(){
	return {
		restrict: 'E',
		scope: {
			mainImage:'=',
			gallery:'='
		},
		templateUrl: 'app/components/gallery-modal/directive-gallery-modal.html',
		link: function(scope,element, attrs){
			
			function init(){
				
				console.log('gallery-modal initialized', scope.mainImage);
			}

			scope.closeModal = function(){
				console.log('closing modal');
				element.remove();

			};

			scope.switchImage = function(direction){
				console.log('switchImage');	
			}

			init();

		}
	};
});