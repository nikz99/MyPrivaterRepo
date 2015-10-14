angular.module('starter.services', [])
.factory("Cart",function(){
  var cart=[];
  return{
    all:function(){
      return cart;
    },
    add:function(itemId,qty){
      var canAdd=true;
      cart.forEach(function(cartItem){
        if(cartItem.item==itemId)
        canAdd=false;
      })
      if(!canAdd)
      return;
      var obj={item:itemId,quantity:qty};
      cart.push(obj);
    },
    remove:function(id){
      cart.splice(cart.indexOf(id), 1);
    }
  }
})
.factory('Categories', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var categories = [{
    id: 0,
    name: 'Groceries'
  },{
    id: 1,
    name: 'Kitchen'
  },{
    id: 2,
    name: 'Others'
  }];

  return {
    all: function() {
      return categories;
    },
    remove: function(category) {
      categories.splice(chats.indexOf(category), 1);
    },
    get: function(categoryId) {
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].id === parseInt(categoryId)) {
          return categories[i];
        }
      }
      return null;
    }
  };

})
  // Some fake testing data
.factory('Items', function() {
  var items = [{
    id: 0,
    name: 'Onion',
    category:0,
    image: 'img/onion.png'
  },{
    id: 1,
    name: 'Eggs',
    category:0,
    image: 'img/eggs.png'
  },{
    id: 2,
    name: 'Milk',
    category:0,
    image: 'img/milk.png'
  },{
    id: 3,
    name: 'Scrub',
    category:1,
    image: 'img/scrub.png'
  },{
    id: 4,
    name: 'Soap',
    category:1,
    image: 'img/soap.png'
  },{
    id: 5,
    name: 'Paper Glass',
    category:2,
    image: 'img/paperGlass.png'
  },{
    id: 6,
    name: 'Bottle',
    category:2,
    image: 'img/waterbottle.png'
  }];

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(chats.indexOf(item), 1);
    },
    getForCategory:function(categoryId){
      if(categoryId==undefined)
      return items;
      var resultSet=[];
      for (var i = 0; i < items.length; i++) {
        if (items[i].category === parseInt(categoryId)) {
          resultSet.push(items[i]);
        }
      }
      return resultSet;
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
