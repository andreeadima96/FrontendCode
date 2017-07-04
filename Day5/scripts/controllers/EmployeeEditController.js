<<<<<<< HEAD
hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory','ManagerService','EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory,ManagerService, EmployeeService) {
=======
hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    'DepartmentsService', 'JobService', 'ManagerService', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, commonResourcesFactory, DepartmentsService, JobService, ManagerService, EmployeeService) {
>>>>>>> 9006076eee91376a2796d4e963a3474a8424378f
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
<<<<<<< HEAD
        $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
            .success(function(data, status, headers, config) {
                $scope.departments = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
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
=======
        $scope.employee = {};

        $scope.departments = [];
        $scope.jobs = [];
        $scope.managers = [];

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
            });
>>>>>>> 9006076eee91376a2796d4e963a3474a8424378f

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);