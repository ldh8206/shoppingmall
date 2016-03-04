angular.module('shoppingMall')//두번째 인자를 주지않는 경우 기존것을 확장, 있는경우 생성
  .constant('dataUrl', 'http://localhost/products')
  .controller('shoppingMallController', function($scope, $http, dataUrl) {

    $scope.data = {};

    $http.get(dataUrl)
      .success(function(data) {
        $scope.data.products = data;
      })
      .error(function(err) {
        $scope.data.error = err;
      });
  });