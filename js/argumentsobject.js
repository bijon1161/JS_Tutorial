
//if no argument passed, then don't pass any parameter while defining function, cause it will take all arguments as arrays in "arguments" despite of knowing the number of arguments

function add()
{
    if(arguments.length==0)
    {
        console.log("No Arguments Passed!");
    }
    else {
        let sum=0;
        for(let i=0;i<arguments.length;i++)
        {
            sum=sum+arguments[i];
        }
        console.log(`Sum is ${sum}`);
    }
}

add(5,7,8);   //take as many numbers as you can