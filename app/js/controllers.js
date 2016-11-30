var TSControllers = angular.module('TSControllers', []);

TSControllers.controller('HomePageController', ['$scope', '$rootScope', 'PhotoService', 'DataShareService', '$location',
	function($scope, $rootScope, PhotoService, DataShareService, $location){

        function init(){
            window.log('controller', 'HomePageController init...');
            $scope.locationFilterName = '';    
        }

		


		PhotoService.getPhotos().then(function(resp){
			$scope.photos = resp.data.entity;

			var photoMap = {};
			angular.forEach($scope.photos, function(entity, key) {
				photoMap[entity.station.id] = {
					"name" : entity.station.name,
					"thumbnail" : entity.station.thumbnail
				};
			});

			DataShareService.setData(photoMap);

		});

		$scope.openPhotoDetails = function(id){
			console.log('TBA');
		};

        init();

	}
]);