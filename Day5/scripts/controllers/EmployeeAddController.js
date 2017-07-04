<<<<<<< HEAD
hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'ManagerService',
    function($scope, $http, $location, CommonResourcesFactory, ManagerService) {
=======
hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'EmployeeService', 'DepartmentsService', 'JobService', 'ManagerService',
        function($scope, $http, $location, CommonResourcesFactory, EmployeeService, DepartmentsService, JobService, ManagerService) {
>>>>>>> 9006076eee91376a2796d4e963a3474a8424378f
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1
<<<<<<< HEAD
        $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
            .success(function(data, status, headers, config) {
                $scope.departments = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
=======
        $scope.departments = [];
        $scope.jobs = [];
        $scope.managers = [];

        /*EmployeeService.findById()
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees service: " + err);
            });*/

        DepartmentsService.findDepartments()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {
                console.log("Error at departaments service: " + err);
            });

        JobService.findJob()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at jobs service: " + err);
            });

        ManagerService.findManager()
            .then(function (res) {
                for(var i in res.data) {
                    if(res.data[i].managerId) {
                        var isValid = 1;
                        for (var j in $scope.managers) {
                            if (res.data[i].managerId.employeeId === $scope.managers[j].employeeId) {
                                isValid = 0;
                                break;
                            }
                        }
                        if(isValid) {
                            $scope.managers.push(res.data[i].managerId);
                        }
                    }
                }
            }, function (err) {
                console.log("Error at jobs service: " + err);
>>>>>>> 9006076eee91376a2796d4e963a3474a8424378f
            });

        $http.get(CommonResourcesFactory.findAllJobsUrl)
            .success(function(data, status, headers, config) {
                $scope.jobs = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });

       $http.get(CommonResourcesFactory.findAllEmployeesUrl)
            .success(function (data, status, headers, config) {
                $scope.employees = data;
            })
            .error(function (data, status, headers, config) {
                alert("Error: " + status);
            });

        ManagerService.getEmployees().then(function(result) {
            $scope.managers = ManagerService.findManagersFromEmployeeList(result);
            console.log($scope.managers);
        });
        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);