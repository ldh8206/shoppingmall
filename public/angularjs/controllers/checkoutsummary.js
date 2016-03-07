angular.module('shoppingMall')
  .controller('checkoutSummarycontroller', function($scope) {
    $scope.cartData = cart.getProducts();

  })