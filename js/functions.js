
function multiTable(num,range)
{
    for(let i=0;i<=range;i++)
    {
       document.write(`${num} * ${i} = ${num*i}`);
       document.write("<br>");
    }

}

multiTable(3,20);
