hrApp.controller('MathController', ['$scope','MathService', function($scope,MathService){
    
    $scope.calculate = function(a,b) {
//        TODO #8 calculate op1, op2, op3, op4
        /*$scope.op1 = a + b;
        $scope.op2 = a - b;
        $scope.op3 = a * b;
        $scope.op4 = a / b;*/

        //  TODO #13 refactor your calculations using MathService

        $scope.op1 = MathService.add($scope.a,$scope.b);
        $scope.op2 = MathService.substract($scope.a,$scope.b);
        $scope.op3 = MathService.multiply($scope.a,$scope.b);
        $scope.op4 = MathService.divide($scope.a,$scope.b);
    }



}]);
