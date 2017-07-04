<<<<<<< HEAD
/**
 * Created by Andreea.Dima on 7/3/2017.
 */
hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {

        function verifyDuplicates(obj, list) {
            for (var i = 0; i < list.length; i++) {
                if (angular.equals(list[i], obj)) {
                    return true;
                }
            }
            return false;
        }

        return {
            getEmployees: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        alert("Error: " + status);
                    });
            },
            findManagersFromEmployeeList: function (employeeList) {
                 var managersList = [];

                angular.forEach(employeeList.data, function (element) {
                    if (element.managerId != null && verifyDuplicates(element.managerId, managersList) == false) {
                        this.push(element.managerId);
                    }
                }, managersList);

                return managersList;
=======
hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findManager: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
>>>>>>> 9006076eee91376a2796d4e963a3474a8424378f
            }
        }
    }]
);