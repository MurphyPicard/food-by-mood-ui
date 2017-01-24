(function(){
  angular
    .module('foodByMood')
    .factory('FoodFactory', FoodFactory);

    FoodFactory.$inject = ['$http'];

    function FoodFactory($http) {
      return {
        foods: {},
        get: function(){
          return $http.get(`http://localhost:3001/api/foods`);
        }
      };
    }
})();
