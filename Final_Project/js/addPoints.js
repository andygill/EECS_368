//Add Event Listener to document
document.addEventListener("DOMContentLoaded", init, false);

//need point object
var Point = function(a,b) {
    var x = a;
    var y = b;

    this.draw = function(gc)  {
        var ctx = gc.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, 100, 0, 2 * Math.PI);
        ctx.stroke();
    }
};

//position to identify points on canvas
function getPosition(event)
{
    var x = new Number();
    var y = new Number();
    var canvas = document.getElementById("canvas");

    //var myPoint = new Point(x,y);

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

    alert("Alert, point will be drawn at: " + x + ", " + y);

};

function babyDraw() {
    var c = document.getElementById("babyCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,75,50,0,2*Math.PI);
    ctx.stroke();

}

function main()
{
    //var canvas = document.getElementById("canvas");
    babyCanvas.addEventListener("mousedown", babyDraw, false);
    //babyDraw();
    canvas.addEventListener("mousedown", getPosition, false);
}
