//break
let i;
for (i=0;i<10;i++)
{
    if(i==5)
    {
        break;
    }
    document.write(i);
    document.write('<br>');
}

//Continue

let i;
for (i=0;i<10;i++)
{
    if(i==5)
    {
        continue;
    }
    document.write(i);
    document.write('<br>');
}

// you can name a loop like this outer:for();   here the loop is named outer, you can break this loop from its nested loop like calling "break outer;"