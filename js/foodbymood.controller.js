(function(){
  angular
    .module('foodByMood')
    .controller('FoodCtrl', FoodCtrl);

  FoodCtrl.$inject = ['$http', '$scope', 'FoodFactory'];

  function FoodCtrl($http, $scope, FoodFactory) {
    // var self = this;
    var rootURL = 'http://localhost:3001/api';

    //index
    $scope.getFoods = function(){
      FoodFactory.get()
        .then(function(res){
          FoodFactory.foods = res.data;
            console.log(FoodFactory.foods);
            $scope.foods = FoodFactory.foods;
            $scope.food = undefined;
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

// SHOW
    $scope.showFood = function(id){
      $http.get(`${rootURL}/foods/${id}`)
        .then(function(res){
          $scope.food = res.data;
          console.log($scope.food);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //delete
    $scope.destroyFood = function(title){
      $http.delete(`${rootURL}/foods/${title}`)
        .then(function(res){
          $scope.food = undefined;
          $scope.getFoods();
          console.log($scope.food);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //new
    $scope.createFood = function(food){
      $http.post(`${rootURL}/foods`, food)
        .then(function(res){
          $scope.foods = res.data;
          console.log($scope.foods);
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
          console.log($scope.foods);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
      };
    }
})();
