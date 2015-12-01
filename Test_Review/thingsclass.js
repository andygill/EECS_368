var square = function(size)
{
    var x = size;
    var space = "";

    for(i = 0; i < x; i++)
    {
        for(j = 0; j < x; j++)
        {
            if(i == 0 || i == x - 1)
            {
                chalk.print("* ");
                console.log("* ");
            }
            else
            {
                if(j == 0 || j == x - 1)
                {
                    chalk.print("* ");
                    console.log("* ");

                }
                else
                {
                    chalk.print(" ");
                    console.log("  ");
                }
            }
        }
        chalk.println("");
        console.log("\n");
    }

}

addExclamation = function(str)
{
    return str + "!!!!!";
}


var Horse = {
    color: "Black",
    gender: "Male",
    age: 45,
    isHooved: false,
    printInfo: function()
    {
        console.log("Horse is a "+this.gender+" with "+this.color+" hair, age "+this.age+". ");
    }
};



main = function()
{
    chalk.println("Enter a plain greeting: ");
    var greetingPromise = chalk.entrybox();

    greetingPromise.then(addExclamation).then(function(str){
        chalk.println(str);

    var obj = {};
    obj["A"] = "CAT";
    obj.b = "AWESOME!";

    for(var k in obj)
    {
        chalk.println(k + " " + obj[k]);
    }
    })
}