(function(){
  angular
    .module('foodByMood')
    .directive('foodIndex', foodIndex);

  function foodIndex(){
    return {
      restrict: 'E',
      template:
        '<div ng-show="food" ng-repeat="e in foods">' +
          '<h3 ng-click="showFood(e.id)">{{e.title}}</h3>' +
        '</div>' +

        '<form ng-hide="food" ng-submit="createFood()">' +
            '<h4>New food</h4>' +

            '<label for="title">Title</label><br>' +
            '<input type="text" ng-model="createFood.title"><br>' +

            '<label for="photoUrl">Photo</label><br>' +
            '<input type="text" ng-model="createFood.photoUrl"><br>' +

            '<label for="preptime">Preptime</label><br>' +
            '<input type="text" ng-model="createFood.preptime"><br>' +

            '<label for="cooktime">Cooktime</label><br>' +
            '<input type="text" ng-model="createFood.cooktime"><br>' +

            '<label for="ingredients">Ingredients</label><br>' +
            '<input type="text" ng-model="createFood.ingredients"><br>' +

            '<label for="description">Description</label><br>' +
            '<input type="text" ng-model="createFood.description"><br>' +

            '<label for="instructions">Instructions</label><br>' +
            '<input type="text" ng-model="createFood.instructions"><br>' +

            '<label for="mood">Mood</label><br>' +
            '<input type="text" ng-model="createFood.mood"><br>' +

            '<label for="votes">Votes</label><br>' +
            '<input type="text" ng-model="createFood.votes"><br>' +

            '<input type="submit" value="Submit">' +
        '</form>'
      };
    }
})();
