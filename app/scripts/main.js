var $ = require('jquery');
var handlebars = require('handlebars');
var Backbone = require('backbone');


var Like = require('./models/like.js');

app.CounterAppView = Backbone.View.extend({

    el: '#counterapp',

    events: {
        'click #add_counter': 'addCounter'
    },

    initialize: function() {
    },

    render: function() {
    },

    addCounter: function() {
        var counter = new app.Counter();
        var view = new app.CounterView({ model: counter});
        $('#counters').append(view.render().el);
    }

});

app.CounterView = Backbone.View.extend({


    tagName: 'div',


    template: _.template( $('#counter-template').html() ),

    events: {
        'click .increment': 'incrementCounter',
    },

    initialize: function() {
        this.model.on( 'change', this.render, this );
        this.model.on( 'destroy', this.remove, this );
    },

    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    },

    incrementCounter: function() {
        this.model.increment();
    },

});
