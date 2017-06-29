hrApp.controller('EmployeeListController', ['$scope', '$http', '$location','commonResourcesFactory',
    function ($scope, $http, $location,$commonResourcesFactory) {
// TODO #HR2 - inject commonResourcesFactory

        $scope.employees = []; // Employee list

        $http.get("http://10.16.8.77:8181/hrapp/jobs/findAll ")
            .success(function(data, status, headers, config) {
                $scope.employees = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });

        //TODO #HR3 Load employee list from server using commonResourcesFactory

        $http.get($commonResourcesFactory.findAllEmployeesUrl)
            .success(function(data, status, headers, config) {
                $scope.employees = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });

        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };


    }]);