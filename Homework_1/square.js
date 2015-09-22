function main() 
{

	return guess(4);

	/*var num = prompt("Please enter a number > 4 and < 20: ");

	while ( num < 4 || num > 20 )
	{
		alert("Invalid input. Please enter a number > 4 and < 20.");

		num = prompt("Please enter an integer > 4 and < 20");
	}

	chalk.println("The square of " + num + " is " + square(num));
*/
}

function square(x) 
{
	return x*x;
}

guess = function(n)
{
	chalk.print("Guess a number: ");
	return 
	{
		entrybox: function(str)
		
		{
			var m = parseInt(str);
			if(m >n)
			{
				chalk.println("Too high");
				return guess(n);

			}
			if (m < n)
			{
				chalk.println("Too low");
				return guess(n);
			}
			else
			{
				chalk.println("Yay you win!");
			}
		}
	}
}

//write a main that asks user for a size
//should reprompt for < 4 and > 20
//don't assume the user entered a number

