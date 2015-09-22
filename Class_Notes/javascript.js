//
main = function ()
{

var flag = false;
var size = 8;
var output = '';
    
    for (var i = 0; i < size; i++)
    {
        for(var k = 0; k < 5; k++)
        {
          if (flag != true)
          {
            output += ' #';
          }
          else
          {
            output += '# ';
          }
        }

        output+='\n';
        flag = !flag;

    }

    console.log(output);
}

fac = function( n )
{
    if ( n < 1 )
    {
        return 1;
    }
    else {
        return fac ( n - 1 ) * n;
    }
}

// recursive isEven checker
var isEven = function(num)
{
    //check if dealing with negatives. If so, throw abs value on it.
    if (num < 0)
    {
      num = Math.abs(num);
    }
  
    if (num == 0)
    {
        return true;
    }
    else if (num == 1)
    {
      return false;
    }
    else 
    {
      return isEven(num - 2);
    }
  
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//very simple min value checker
var min = function(a, b)
{
    if(a < b)
    {
      return a;
    }
    else
    {
      return b;
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Simple Code to Count B's in a function
var countBs = function(str)
{
    var counter = 0;
    for(var i = 0; i < str.length; i++)
    {
      if (str.charAt(i) == 'B')
      {
        counter++;
      }
    }
  return counter;
}

//general character counter
var countChar = function(str, letter)
{
    var counter = 0;
    var letterToCheck = letter;
  
    for(var i = 0; i < str.length; i++)
    {
      if (str.charAt(i) == letterToCheck)
      {
        counter++;
      }
    }
  
  return counter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

//Produces a checkboard of n lines
var checkerBoard = function(size)
{

var flag = false;
var boardSize = size;
var output = '';
    
    for (var i = 0; i < size; i++)
    {
        for(var k = 0; k < 5; k++)
        {
          if (flag != true)
          {
            output += ' #';
          }
          else
          {
            output += '# ';
          }
        }
    
    output+='\n';
    flag = !flag;
    
    }

console.log(output);

}
