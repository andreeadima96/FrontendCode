/**
 * Created by Andreea.Dima on 6/28/2017.
 */
angular.module('hrApp').controller('MainController',['$rootScope','$scope', function($rootScope, $scope){
    $scope.someValue = "someValue";
    console.log($scope.someValue);
}]);