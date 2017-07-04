/**
 * Created by Andreea.Dima on 7/3/2017.
 */
hrApp.controller('EmployeeDeleteController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory','EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory,EmployeeService) {

        $http.get(CommonResourcesFactory.findAllEmployeesUrl)
            .success(function (data, status, headers, config) {
                $scope.employees = data;
            })
            .error(function (data, status, headers, config) {
                alert("Error: " + status);
            });

        $scope.deleteEmployee = function (removeEmployee) {
            $http({url: CommonResourcesFactory.deleteEmployeeUrl, method: 'DELETE', data: removeEmployee, headers:{'Content-Type':'application/json'}})
                .success(function (data) {
                   // $scope.employees.splice(deleteEmployee.employeeId,1);
                    $location.url('/employeeList');
                });
        };
    }]);