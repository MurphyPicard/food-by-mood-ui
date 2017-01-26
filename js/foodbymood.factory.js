(function(){
  angular
    .module('foodByMood')
    .factory('FoodFactory', FoodFactory)
    .factory('MoodFactory', MoodFactory);

    FoodFactory.$inject = ['$http'];
    MoodFactory.$inject = ['$http'];

    function FoodFactory($http) {
      return {
        foods: {},
        get: function(){
          return $http.get(`https://food-by-mood.herokuapp.com/api/foods`);
        }
      };
    }

    function MoodFactory($http) {
      return {
        moods: {},
        get: function(){
          return $http.get(`https://food-by-mood.herokuapp.com/api/moods`);
        }
      };
    }
})();
