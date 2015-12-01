var Point = function(a,b)
{
    var x = parseInt(a);
    var y = parseInt(b);
};

var getPosition = function(event)
{
    var x = new Number();
    var y = new Number();
    var c = document.getElementById("canvas");

    if (event.x != undefined && event.y != undefined)
    {
        x = event.x;
        y = event.y;
    }
    else // Firefox method to get the position
    {
        x = event.offsetX;
        y = event.offsetY;
    }

        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(parseInt(x),parseInt(y),6,0,2*Math.PI);
        ctx.fillStyle = "black"
        ctx.fill();
};

main = function()
{
    canvas.addEventListener("mousedown", getPosition, false);
};
