(function(){
  angular
    .module('foodByMood')
    .controller('FoodCtrl', FoodCtrl)
    .controller('MoodCtrl', MoodCtrl);

  FoodCtrl.$inject = ['$http', '$scope', 'FoodFactory'];
  MoodCtrl.$inject = ['$http', '$scope', 'MoodFactory'];

  var rootURL = 'http://localhost:3001/api';

  function MoodCtrl($http, $scope, MoodFactory) {

    //index
    $scope.getMoods = function(){
      MoodFactory.get()
        .then(function(res){
          MoodFactory.moods = res.data;
            console.log(MoodFactory.moods);
            $scope.moods = MoodFactory.moods;
            $scope.mood = undefined;
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };


// SHOW
    $scope.showMood = function(title){
      $http.get(`${rootURL}/moods/${title}`)
        .then(function(res){
          $scope.mood = res.data;
          console.log($scope.mood);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };
  }

  function FoodCtrl($http, $scope, FoodFactory) {
    //index
    $scope.getFoods = function(){
      FoodFactory.get()
        .then(function(res){
          FoodFactory.foods = res.data;
            console.log(FoodFactory.foods);
            $scope.foods = FoodFactory.foods;
            $scope.food = undefined;
            var e = document.getElementById("mainSelect");
            // moodVal is the Value of the option element selected.
            var moodVal = e.options[e.selectedIndex].value;
            console.log(`this is what moodVal = ${moodVal}`);

            //MONGO SEARCH WE NEED
            //db.foods.find({"mood": moodVal})
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

// SHOW
    $scope.showFood = function(title){
      $http.get(`${rootURL}/foods/${title}`)
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
          $scope.getFoods();
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //edit
    $scope.editFood = function(food){
      $http.put(`${rootURL}/foods`, food)
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
