angular.module('shoppingMall')
  .constant('productListActiveClass', 'btn-primary') //함수호출로 constant
  .controller('productListController', function($scope, productListActiveClass) { //내부로 contant를 넘겨주어야 사용할수 있음

    var currentCategory = undefined;

    $scope.selectCategory = function(category) {
      currentCategory = category;
    };

    $scope.categoryFilterFn = function(item) {
      return currentCategory === undefined || item.category === currentCategory;
    };

    $scope.getCategoryClass = function(category) {
      return currentCategory === category ? productListActiveClass: "";
    }

  });