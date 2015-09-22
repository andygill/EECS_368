//Constructors are just like regular functions in JS.
function Speed(i)
{
	this.mph = i;

	this.inc = function(delta)
	{
		this.mph += delta;
	}

	return this; //automatically included.
}


function main()
{
	var o = new Speed(5654);
	console.log(o);
	o.inc(99);
	console.log(o);
	console.log("Test will anything pop up");
}