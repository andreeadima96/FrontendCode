/**
 * Created by Andreea.Dima on 6/28/2017.
 */
angular.module('shopApp').controller('imageController',['$scope', function ($scope){
    $scope.images = [
        {   id : 1,
            url : 'images/bluza.jpg',
            price:1200
        },{ id : 2,
            url : 'images/fusta.jpg',
            price:2000
        },{ id :3,
            url : 'images/pantaloni.jpg',
            price:3000
        },{ id: 4,
            url : 'images/rochie.jpg',
            price:4000
        }
    ];
    $scope.displayPrice = function (image){
        $scope.selectedPrice = image.price;
    }

    $scope.addToCart = function (image){

    }

}])