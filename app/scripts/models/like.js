var $ = require('jquery');
var handlebars = require('handlebars');
var Backbone = require('backbone');



app.Counter = Backbone.Model.extend({

    defaults: {
      count: 0
    },

    increment: function() {
      this.save({
        count: this.get('count') + 1
      });
    },

});

var Counter = new app.Counter();

module.exports = app.Counter;
