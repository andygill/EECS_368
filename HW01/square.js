function square(x) 
{
	return x*x;
}

function enterNum()
{

	chalk.println("Enter a number > 4 and < 20.");

	return {	
	entrybox: function(str)
		{
			var num = parseInt(str);

			if(num <= 4 || num >= 20 )
			{
				chalk.println("Number out of range. Please enter number > 4 and < 20.");
				return enterNum();
			}

			else
			{
				chalk.println(num+" squared is "+square(num));
				return enterNum();
			}
		}
	};
}


function main() 
{
	return enterNum();
}





