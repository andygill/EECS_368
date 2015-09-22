var Circle = function(a,b,r,ad,bd,col)
{
	var x = a;
	var y = b;
	var xd = ad;
	var yd = bd;

	this.toString = function()
	{
		return "Circle { x = .....}"
	}

	this.draw = function(gc)
	{
		gc.beginPath();
		gc.arc(x,y,r,0,2*Math.PI, false);
	}
}