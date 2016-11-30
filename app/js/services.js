var PortfolioServices = angular.module('PortfolioServices', ['ngResource']);

PortfolioServices.factory('PhotoService', ['$http', function($http){
	var doRequest = function(data){
		var url = 'app/data/photos.json';
		window.log('service', 'photoService: calling '+ url);

		var promise = $http({
			method: 'GET',
			url: url,
			data: data, 
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.success(function(data){
			if(data && data.status === 200){
				window.log('service', 'TSService: success retrieving data');
			}
			else{
				window.log('service', 'TSService: ERROR retrieving data');
			}
		});

		return promise;
	};

	return {
		getPhotos: function(data){
			return doRequest(data);
		}
	};

}]);


/**
* Data Sharing Service (Singleton Service to share data between two controllers)
*/
PortfolioServices.factory('DataShareService',function($rootScope,$timeout){
  var service = {};
  service.data = false;
  service.setData = function(data){
      this.data = data;
      $timeout(function(){
         $rootScope.$broadcast('data_shared');
      },1);
  };
  service.getData = function(){
    return this.data;
  };
  return service;
});