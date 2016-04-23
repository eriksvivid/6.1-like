var $ = require('jquery');
var Backbone = require('backbone');

var Like = require('./models/like');
var likeCounter = new Like({
  likes: 0
});

$('.like-button').on('click',function(){
  var newLike = likeCounter.like();
  $('.like-button').text(newLike + ' ' + 'Likes');
  likeCounter.toJSON();
});
