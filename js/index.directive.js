(function(){
  angular
    .module('foodByMood')
    .directive('foodIndex', foodIndex);

  function foodIndex(){
    return {
      restrict: 'E',
      template:
        `<div ng-hide="food" ng-repeat="e in foods">
        <div class="container">
          <div class="food">
            <h2 ng-click="showGrumble(e.id)">{{e.title}}</h2>
            <img ng-click="showFood(e.id)" src="{{e.photoUrl}}">
          </div>
        </div>
      </div><div class="container">
      <form ng-hide="food" class="food" ng-submit="createFood(newFood)">
        <h4>New Food</h4>
        <label for="title">Title</label><br>
        <input type="text" ng-model="createFood.title"><br>

        <label for="photoUrl">Photo</label><br>
        <input type="text" ng-model="createFood.photoUrl"><br>

        <label for="preptime">Preptime</label><br>
        <input type="text" ng-model="createFood.preptime"><br>

        <label for="cooktime">Cooktime</label><br>
        <input type="text" ng-model="createFood.cooktime"><br>

        <label for="ingredients">Ingredients</label><br>
        <input type="text" ng-model="createFood.ingredients"><br>

        <label for="description">Description</label><br>
        <input type="text" ng-model="createFood.description"><br>

        <label for="instructions">Instructions</label><br>
        <input type="text" ng-model="createFood.instructions"><br>

        <label for="mood">Mood</label><br>
        <input type="text" ng-model="createFood.mood"><br>

        <label for="votes">Votes</label><br>
        <input type="text" ng-model="createFood.votes"><br>

        <input type="submit" value="Submit">
    </form>
      </form></div>`

      };
    }
})();
