PortfolioDirectives.directive('photoGallery', function(){
	return {
		restrict: 'E',
		scope: {
			gallery:'=',
			locationFilterName:'='
		},
		templateUrl: 'app/components/photo-gallery/directive-photo-gallery.html',
		link: function(scope,element, attrs){
			
			function init(){				
				console.log('photo gallery initialized', scope.locationFilterName);

				scope.imageSelected = false;
				scope.imageInModal = null;

			}

			scope.openPhotoDetails = function(image){
				
				scope.imageSelected = true;
				scope.imageInModal = image;
				console.log('triggering floating gallery');
			};

			init();

		}
	};
});
