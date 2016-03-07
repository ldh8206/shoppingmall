angular.module('cart', [])
  .factory('cart', function() { //기능을 제공하는 서비스
    var cartData = [];
    return {
      addProduct: function(id, name, price) {
        var existingItem = false;
        for(var i = 0; i < cartData.length; i++) {
          if (cartData[i].id === id) {
            cartData[i].count++;
            existingItem = true;
            break;
          }
        }
        if (!existingItem) {
          cartData.push({
            "id": id,
            "name": name,
            "price": price,
            "count": 1
          });
        }
      },
      removeProduct: function(id) {
        for(var i = 0; i < cartData.length; i++) {
          if (cartData[i].id === id) {
            cartData.splice(i, 1);
            break;
          }
        }
      },
      getProducts: function() {
        return cartData;
      }
    };
  })
  .directive('cartSummary', function(cart) { //사용자 정의 태그를 만들어 제공하는 서비스
    return {
      restrict: 'E', //element로 사용 , 'EA' element, attribute로 사용
      templateUrl: 'angularjs/components/cart/cartsummary.html',
      controller: function($scope) {
        var cartData = cart.getProducts();
        $scope.totalPrice = function() {
          var total = 0;
          for (var i = 0; i < cartData.length; i++) {
            total += cartData[i].price * cartData[i].count;
          }
          return total;
        };
        $scope.itemCount = function() {
          var total = 0;
          for (var i = 0; i < cartData.length; i++) {
            total += cartData[i].count;
          }
          return total;
        };
      }
    }
  })