/**
 * Created by Andreea.Dima on 6/29/2017.
 */
hrApp.controller('UserController', ['$scope','$location','UserService', function($scope,$location,UserService) {
    $scope.title = 'User Application';

    $scope.users = UserService;
    $scope.show = false;
    $scope.user ={};

    $scope.back = function() {
        $location.url('/');
    }

    $scope.resetFields = function(){
        $scope.user.firstName = "";
        $scope.user.lastName = "";
        $scope.user.id = "";
        $scope.user.age = "";
    }

    $scope.addUser = function(){
        UserService.push(angular.copy($scope.user));
        alert("Data has been saved");
    }
    $scope.ShowHide = function() {
        $scope.show = ! $scope.show;

    }
}]);