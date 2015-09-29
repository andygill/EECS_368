main = function()
{
	chalk.println("hello");
	/*bar takes in a function f as an argument. It returns a function based 
	on a new parameter, a. It will first print the first function f that was passed in, and then evaluates f(a) and returns it.
	*/
	chalk.println("=> + "+bar(add1)(912));

};

function add1(a) { return a+1; }

function foo(f,a)
{
	//will call foo, a function, and will pass in argument a as value
	console.log(f);
	return f(a);
}

function bar(f) {

	return function(a) {

		console.log(f);
		return f(a);
	}
}

function fac(n,k)
{
	if (n == 0)
	{
		return k(1);
	}

	if(n<0)
	{
		return undefined
	}

	return fac( n - 1, function( r ) { return k( r*n ); } ) 
}