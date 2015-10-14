angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller("marketController",function($scope,$ionicPopup,$ionicSideMenuDelegate,Items,Categories,Cart){


  $scope.cart=[];
  $scope.categories=Categories.all();
  $scope.showCategory;
  $scope.items=Items.getForCategory($scope.showCategory);
  $scope.quantity=0;
  $scope.setCategory=function(id){
    console.log(id);
    $scope.showCategory=id;
    $scope.items=Items.getForCategory($scope.showCategory);
  }
  $scope.getCategory=function(id){
    return Categories.get(id);
  }
  $scope.addToCart=function(id,qty){
    var canAdd=true;
    $scope.cart.forEach(function(item){
      if(item==id)
      canAdd=false;
    })
    if(canAdd)
    $scope.cart.push(id);
    Cart.add(id,qty);
    console.log(Cart.all());
  }

  $scope.showPopup = function() {
    $scope.quantity=undefined;
  var myPopup = $ionicPopup.show({
    title: 'Enter quantity',
    subTitle: 'Please enter quantity',
    scope: $scope,
    template: '<input type="text" ng-model="quantity"></input>',
    buttons: [
      { text: 'Cancel',
        onTap:function(e){
          this.close();
        }
      },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          console.log($scope.quantity)
          if (!$scope.quantity) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            //return $scope.quantity;
            this.close();
          }
        }
      }
    ]
  });
  myPopup.then(function(res) {
   console.log('Tapped!', res);
   Cart.add(id,1);
   console.log(Cart.all());
 });
 }

  $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller("testController",function($scope,$ionicSideMenuDelegate){
  $scope.items=["World","WORLD"];
  $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
