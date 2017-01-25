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
              <h2>{{food.title}}</h2>
              <img src="{{food.photoUrl}}">
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
              <h4>Edit Food</h4>
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

              <label for="mood">Mood</label><br>
              <select ng-model="newFood.mood">
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="comfortable">Comfortable</option>
                <option value="excited">Exciting</option>
                <option value="scared">Scary</option>
                <option value="drunk">Drunk</option>
                <option value="stoned">Stoned</option>
                <option value="healthy">Healthy</option>
              </select><br>

              <input type="submit" value="Edit Food">
            </form>
          </div>

          <div class="footer">
          <p>Made by <a href="http://matt-connors.com/" target="_blank">Matthew Connors</a>, <a href="https://murphypicard.github.io/" target="_blank">Ara Yaghsizian</a>, and <a href="" target="_blank">Sandy Pok</a>.</p>
          </div>`



    };
  }

})();
