var PortfolioControllers = angular.module('PortfolioControllers', []);

PortfolioControllers.controller('HomePageController', ['$scope', '$rootScope', 'PhotoService', 'DataShareService', '$location',
	function($scope, $rootScope, PhotoService, DataShareService, $location){

        function init(){
            window.log('controller', 'HomePageController init...');
            $scope.locationFilterName = '';    
        }

		PhotoService.getPhotos().then(function(resp){
			$scope.photos = resp.data.entity;

			var photoMap = {};
			angular.forEach($scope.photos, function(entity, key) {
				photoMap[entity.image.id] = {
					"name" : entity.image.name,
					"thumbnail" : entity.image.thumbnail
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

PortfolioControllers.controller('YoutubePageController', ['$scope','$location',
    function($scope, $location){

        function init(){
            window.log('controller', 'YoutubePageController init...');
            $scope.pageName = 'Youtube';    
        }        

        init();

    }
]);

PortfolioControllers.controller('AboutPageController', ['$scope','$location',
    function($scope, $location){

        function init(){
            window.log('controller', 'AboutPageController init...');
            $scope.pageName = 'About';    
        }        

        init();

    }
]);

PortfolioControllers.controller('ContactsPageController', ['$scope','$location',
    function($scope, $location){

        function init(){
            window.log('controller', 'ContactsPageController init...');
            $scope.pageName = 'Contacts';    
        }        

        init();

    }
]);