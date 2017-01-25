(function(){
  angular
    .module('foodByMood')
    .factory('FoodFactory', FoodFactory)
    .factory('MoodFactory', MoodFactory);

    FoodFactory.$inject = ['$http'];
    MoodFactory.$inject = ['$http'];


    var e = document.getElementById("mainSelect");
    // moodVal is the Value of the option element selected.
    var moodVal = e.options[e.selectedIndex].value;

    function FoodFactory($http) {
      return {
        foods: {},
        get: function(){
          return $http.get(`http://localhost:3001/api/foods`);
        }
      };
    }

    function MoodFactory($http) {
      return {
        moods: {},
        get: function(){
          return $http.get(`http://localhost:3001/api/moods`);
        }
      };
    }
})();
