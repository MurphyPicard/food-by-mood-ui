(function(){
  angular
    .module('foodByMood')
    .directive('foodIndex', foodIndex);

  function foodIndex(){
    return {
      restrict: 'E',
      template: '<div ng-hide="food" ng-repeat="e in foods">' +
        '<h3 ng-click="showFood(e.id)">{{e.title}}</h3>' +
        '</div>' +
        '<form ng-hide="food" ng-submit="createFood()">' +
          '<h4>New food</h4>' +
          '<label for="authorName">Author</label><br>' +
          '<input type="text" ng-model="newFood.authorName"><br>' +
          '<label for="title">Title</label><br>' +
          '<input type="text" ng-model="newFood.title"><br>' +
          '<label for="content">Content</label><br>' +
          '<input type="text" ng-model="newFood.content"><br>' +
          '<label for="photoUrl">Photo URL</label><br>' +
          '<input type="text" ng-model="newFood.photoUrl"><br>' +
          '<input type="submit" value="Submit">' +
        '</form>'
      };
    }
})();
