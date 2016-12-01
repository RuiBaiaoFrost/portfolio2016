PortfolioControllers.controller('GalleryModalController', ['$scope', '$ocModalParams', function($scope, $ocModalParams) {
        
	$scope.switchImage = function(direction){
		debugger;
		var imageToSet = null;
		_.each($scope.gallery, function(photo, idx){
			//if the main photo is found, change it, depending on the direction									
			if(photo.image.id === $scope.mainImage.id && imageToSet === null){
				if(direction === 'next'){
					imageToSet = $scope.gallery[idx+1].image;							
				}
				else if(direction === 'previous'){
					imageToSet = $scope.gallery[idx-1].image;
				}
			}
		});
		$scope.mainImage = imageToSet;

	};	

}]);