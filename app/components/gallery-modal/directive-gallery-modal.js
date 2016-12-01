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
				
				var imageToSet = null;
				_.each(scope.gallery, function(photo, idx){
					//if the main photo is found, change it, depending on the direction									
					if(photo.image.id === scope.mainImage.id && imageToSet === null){
						if(direction === 'next'){
							imageToSet = scope.gallery[idx+1].image;							
						}
						else if(direction === 'previous'){
							imageToSet = scope.gallery[idx-1].image;
						}
					}
				});
				scope.mainImage = imageToSet;

			};

			init();

		}
	};
});