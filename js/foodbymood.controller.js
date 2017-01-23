(function(){
  angular
    .module('foodByMood')
    .controller('FoodCtrl', FoodCtrl);

  FoodCtrl.$inject = ['$http', '$scope'];

  function FoodCtrl($http, $scope) {
    // var self = this;
    var rootURL = 'http://localhost:3000';

    //index
    $scope.getFoods = function(){
      $http.get(`${rootURL}/grumbles`)
        .then(function(res){
          $scope.foods = res.data;
          $scope.food = undefined;
          console.log($scope.foods);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    $scope.showFood = function(id){
      $http.get(`${rootURL}/grumbles/${id}`)
        .then(function(res){
          $scope.food = res.data;
          console.log($scope.grumble);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //delete
    $scope.destroyFood = function(id){
      $http.delete(`${rootURL}/grumbles/${id}`)
        .then(function(res){
          $scope.grumble = undefined;
          $scope.getFoods();
          console.log($scope.grumble);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //new
    $scope.createFood = function(food){
      $http.post(`${rootURL}/foods`, food)
        .then(function(res){
          console.log(res.data);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //edit
    $scope.editFood = function(food){
      $http.put(`${rootURL}/foods/${$scope.food.id}`, food)
        .then(function(res){
          // $scope.getFoods(); //Redirect to Index
          $scope.food = res.data;
          console.log(res.data);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
      };
    }
})();
