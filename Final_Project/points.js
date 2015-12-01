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
    model: Point,

    //Save all of the point items under the "points-backbone" namespace.
    localStorage: new Backbone.LocalStorage("points-backbone")

});

//Instantiate a New PointSet and add a few elements
var myPoints = new PointSet();

myPoints.add({color: 'black', x: 150, y:150, radius: 6 });
myPoints.add({color: 'red', x: 100, y:100, radius: 8 });


//A view to display the points on the canvas
var PointView = Backbone.View.extend({

   render: function() {
       var model = this.model, ctx = this.options.ctx;
       //ctx.clearRect(0, 0, canvas.width, canvas.height);
       ctx.fillStyle = model.get("color");

       //draw the circle using the model
       ctx.beginPath();
       ctx.arc(model.get("x"), model.get("y"), model.get("radius"),0,2*Math.PI);
       ctx.fill();
   }
});

// The MainView is the top-level piece of UI, the Canvas.
var MainView = Backbone.View.extend({

    //Bind to the Canvas HTML element.
    el: $("canvas"),

    //need to add events
    events: {
        "click": "createOnClick"
    },

   initialize: function() {
       this.listenTo(myPoints, 'add', this.render);
       this.listenTo(myPoints, 'all', this.render);
   },

   render: function() {
       var canvas = this.el, ctx = canvas.getContext("2d");
       ctx.clearRect(0, 0, canvas.width, canvas.height);

       myPoints.each(function(model) {
           var view = new PointView({ctx: ctx, model: model});
           view.render();
       })
   },

   //If you click on the Main View, create new **Point** model,
   // persisting it to *localStorage*
   createOnClick: function(event) {


       if (event.x != undefined && event.y != undefined){
           x = event.x;
           y = event.y;
       } else // Firefox method to get the position
       {
           x = event.offsetX;
           y = event.offsetY;
       }

       //create a new Point and persist it to localStorage.
       myPoints.create({color:'black',x: x, y: y, radius: 6});

       //Hahaha wow. This is weird.
       //alert("Point created, x: "+ x + " y: "+y);
   }

}); //end Set View

//Instantiate a canvas view
var v = new MainView;
v.render();

}); // END MAIN FUNCTION
