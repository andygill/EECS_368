#EECS 368 Final Project

####Project Description

Interactive Canvas is a Javascript web application created with the Backbone.js framework. It follows MVC design principles to clearly separate DOM elements from the application’s data. Users can change the radius and color of balls on the canvas, and can refresh the canvas at any time.

####Application Overview

- **Point (Model):** The point model contains the color, coordinates, and radius of each point.
- **PointSet (Collection):** Every point drawn on the canvas is stored within the PointSet collection, persisted using a Backbone LocalStorage adapter.
- **PointView (View):**  This view is used to display individual points on the canvas. Its render function draws the points to the canvas.
- **MainView (View):** The top-level piece of User Interface. The view listens for clicks on the canvas, and fires the “Create on Click” function to grab the current radius and Hex color value from the controls and push a new point onto the PointSet. Consequently, the listener for ‘add’ on the PointSet it fired, re-rendering the Canvas to reflect all the points in the LocalStorage.


####Resources Used

- **Backbone.js** – Overall application structure and functionality.
- **Jquery.js** – selecting and referencing HTML in the javascript code.
- **Spectrum.js** – A configurable color selector made by @bgrins.
- **Todos.js** – A very helpful and well documented example Backbone application contributed by Jérôme Gravel-Niquet. It helped me understand how to structure my application.
