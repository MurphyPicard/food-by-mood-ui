(function(){
  angular
    .module('foodByMood')
    .directive('foodShow', foodShow);

function foodShow() {
    return {
      restrict: 'E',
      template:
         `<div ng-show="food" class="container">
            <div class="food">
              <img src="{{food.photoUrl}}">
              <h3>{{food.title}}</h3>
              <h5>{{food.prepTime}} minutes to prepare</h5>
              <h5>{{food.cookTime}} minutes to cook</h5>
              <h5>Ingredients: {{food.ingredients}}</h5>
              <h5>{{food.description}}</h5>
              <h5>{{food.instructions}}</h5>
              <h5>What's your mood?  {{food.mood}}</h5>
              <h5>Votes: {{food.votes}}</h5>
              <button ng-click="destroyFood(food.title)">Delete this food</button>
            </div>
          </div>

          <div class="container">
            <form ng-show="food" class="food" ng-submit="editFood(food)">
              <h4>Edit food</h4>
              <label for="title">Title</label><br>
              <input type="text" ng-model="food.title"><br>

              <label for="photoUrl">photoUrl</label><br>
              <input type="text" ng-model="food.photoUrl"><br>

              <label for="prepTime">prepTime</label><br>
              <input type="text" ng-model="food.prepTime"><br>

              <label for="cookTime">cookTime</label><br>
              <input type="text" ng-model="food.cookTime"><br>

              <label for="ingredients">ingredients</label><br>
              <input type="text" ng-model="food.ingredients"><br>

              <label for="description">description</label><br>
              <input type="text" ng-model="food.description"><br>

              <label for="instructions">instructions</label><br>
              <input type="text" ng-model="food.instructions"><br>

              <label for="mood">mood</label><br>
              <input type="text" ng-model="food.mood"><br> <br><br>
              <input type="submit" value="Edit food">
            </form>
          </div>

          <div class="footer">
              
          </div>`



    };
  }

})();
