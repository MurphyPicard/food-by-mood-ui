(function(){
  angular
    .module("foodByMood", [
      "ui.router",
      "ngResource"
    ])
    .config([
      "$stateProvider",
      Router
    ])
    .factory("FoodFactory", [
      "$resource",
      Food
    ])
    .controller("indexCtrl", [
      "Food",
      indexController
    ]);

    function Router($stateProvider){
      $stateProvider

        //.state("welcome", {
        //  url: "/",
        //  templateUrl: "/assets/js/ng-views/welcome.html"
        // })

        .state("index", {
          url: "/foods",
          templateUrl: "/assets/js/ng-views/index.html",
          controller: "indexCtrl",
          controllerAs: "vm"
        });
      }

    function Food ($resource) {
      return $resource("/api/foods/:name", {}, {
        update: { method: "PUT"}
      });
    }

    function indexController (Food) {
      this.foods = Food.query();
    }
})();
