app.controller('individualShowController', ['$scope','individualsFactory', '$location', '$routeParams', '$base64',
	function($scope, individualsFactory, $location, routeParams, $base64) {

    $scope.show = function(){
        individualsFactory.getOneIndividual(routeParams.id, function(data){
            $scope.individual = data.result;
        });
    };
    $scope.show();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the individuals when we get back?  We can re-run index.
*/
  
}]);