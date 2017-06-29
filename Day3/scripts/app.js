// TODO #2 load ngRoute module
var hrApp=angular.module('hrApp',['ngRoute']);

// TODO #3 add default route for main page
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        }).
        // TODO #4 add #/numbers route and use redirectTo
        when('/numbers', {
            redirectTo:'/math'
        }).
        // TODO #6 add route for mathematical operations
        when('/math', {
            templateUrl: 'views/demo/math.html',
            controller: 'MathController'
        }).
        // TODO #9 add route for http request demo page
        when('/demoRequest', {
            templateUrl: 'views/demo/request.html',
            controller: 'RequestController'
        }).
        when('/employeeslist', {
                templateUrl: 'views/employeelist.html',
                controller: 'EmployeeListController'
            }).
        when('/employeeview/:employeeid', {
                templateUrl: 'views/employeeview.html',
                controller: 'EmployeeViewController'
            }).
        when('/user', {
            templateUrl: 'views/user.html',
            controller: 'UserController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);





// TODO #HR1 add routes for Employees List page and Employee View page

