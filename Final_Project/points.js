//Backbone Canvas Application
//A meager attempt to learn Backbone, using Canvas.

// Load the application once the DOM is ready, using `jQuery.ready`:
$(function(){

// Point Model
var Point = Backbone.Model.extend({

defaults: {
        color: '#FF9000',
        x: 0,
        y: 0,
        radius: 6
    }
}); // end Point Model

//Collection of Points
var PointSet = Backbone.Collection.extend({
    model: Point
});

//A view to display the points on the canvas
var CanvasView = Backbone.View.extend({
   render: function() {
       var model = this.model, ctx = this.options.ctx;

       ctx.fillStyle = '#FF9000';
       ctx.globalAlpha = 0.1;
       //draw the circle using the model
       ctx.arc(model.get("x"), model.get("y"), model.get("radius"),0,2*Math.PI);
       ctx.fill();
   }
});


var SetView = Backbone.View.extend({

    //need to add events

   initialize: function() {
       this.listenTo(this.collection, "all", this.render);
   },

   render: function() {
       var canvas = this.el, ctx = canvas.getContext("2d");
       ctx.clearRect(0, 0, canvas.width, canvas.height);

       this.collection.each(function(model) {
           var view = new CanvasView({ctx: ctx, model: model});
           view.render();
       })
   }

}); //end Set View


//Instantiate a New PointSet and add a few elements
var c = new PointSet();
c.add({color: 'black', x: 150, y:150, radius: 6 });
c.add({color: 'red', x: 100, y:100, radius: 8 });

//Instantiate a canvas view
var v = new SetView({
   el: $("canvas"),
   collection: c
});

v.render();

}); // END MAIN FUNCTION
