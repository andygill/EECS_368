//Add Event Listener to document
document.addEventListener("DOMContentLoaded", init, false);

//need point object
var Point = function(a,b) {
    var x = a;
    var y = b;

    this.draw = function(gc)  {
        gc.beginPath();
        gc.arc(xpos,ypos,rad, 0, 2 * Math.PI, false);
        gc.fillStyle = col;
        gc.fill();
    }
}

//position to identify points on canvas
function getPosition(event)
{
    var x = new Number();
    var y = new Number();
    var canvas = document.getElementById("canvas");

    if (event.x != undefined && event.y != undefined)
    {
        x = event.x;
        y = event.y;
    }
    else // Firefox method to get the position
    {
        x = event.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop +
        document.documentElement.scrollTop;
    }

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    alert("Alerty: " + x + y);

}

function main()
{
    var canvas = document.getElementById("canvas");
    canvas.addEventListener("mousedown", getPosition, false);
}
