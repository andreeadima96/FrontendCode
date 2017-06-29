/**
 * Created by Andreea.Dima on 6/28/2017.
 */
angular.module('hrApp').controller('MenuController',['$scope',function ($scope) {
    $scope.demoActionList = [
        {
            label: "OtherScope",
            url: "views/childscope.html"
        }
    ];

}]);