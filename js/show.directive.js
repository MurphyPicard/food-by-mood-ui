(function(){
  angular
    .module('foodByMood')
    .directive('foodShow', foodShow);

function foodShow() {
    return {
      restrict: 'E',
      template: `<div ng-show="food" class="container">
        <div class="food">
            <img src="{{food.photoUrl}}">
            <h3 ng-click="showfood(food.id)">{{food.title}}</h3>
            <p>{{food.description}}</p>
            <h4>-{{food.authorName}}</h4>
            <button ng-click="destroyfood(food.id)">Delete this food</button>
          </div>
        </div>
        <div class="container"><form ng-show="food" class="food" ng-submit="editfood(food)">
         <h4>Edit food</h4>
         <label for="authorName">Author</label><br>
         <input type="text" ng-model="food.authorName" value=""><br>
         <label for="title">Title</label><br>
         <input type="text" ng-model="food.title" value=""><br>
         <label for="content">Content</label><br>
         <input type="text" ng-model="food.content" value=""><br>
         <label for="photoUrl">Photo URL</label><br>
         <input type="text" ng-model="food.photoUrl" value=""><br><br>
         <input type="submit" value="Edit food">
              </form></div><div class="footer">
              </div>`

    };
  }

})();
