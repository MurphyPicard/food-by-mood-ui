(function(){
  angular
    .module('foodByMood')
    .directive('foodShow', foodShow);

  function foodShow(){
    return {
      restrict: 'E',
      template: '<div ng-show="food">' +
        '<h3>{{food.title}}</h3>' +
        '<h5>{{food.description}}</h5>' +
        '<button ng-click="destroyFood(food.id)">Delete Food</button>' +
        '<img src="{{food.photoUrl}}" alt="photo">' +
        '</div>' +
        '<form ng-show="food" ng-submit="editFood(food)">' +
        '<h4>Edit Food</h4>' +
        '<label for="authorName">Author</label><br>' +
        '<input type="text" ng-model="food.authorName"><br>' +
        '<label for="title">Title</label><br>' +
        '<input type="text" ng-model="food.title"><br>' +
        '<label for="content">Content</label><br>' +
        '<input type="text" ng-model="food.content"><br>' +
        '<label for="photoUrl">Photo URL</label><br>' +
        '<input type="text" ng-model="food.photoUrl"><br>' +
        '<input type="submit" value="Submit">' +
      '</form>'
    };
  };
})();
