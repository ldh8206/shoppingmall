angular.module('customFilters', [])
  .filter('unique', function() {
    return function(data, propName) {
      if (angular.isArray(data) && angular.isString(propName)) { //array에 대해서 propName을 검사
        var results = [];
        var keys = {};
        for (var i = 0; i < data.length; i++) {
          var value = data[i][propName];
          if (angular.isUndefined(keys[value])) {
            keys[value] = true;
            results.push(value);
          } //존재여부 검사
        }
        return results;
      } else {
        return data;
      }
    };
  });