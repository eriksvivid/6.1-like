var $ = require('jquery');
var handlebars = require('handlebars');
var Backbone = require('backbone');

var Like = Backbone.Model.extend({
  like: function(){
    this.set({'likes':this.get('likes') + 1 });
    return this.get('likes');
  }
});

module.exports = Like;
