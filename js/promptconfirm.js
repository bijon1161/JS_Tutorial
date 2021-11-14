//Prompt

let age=prompt("Enter Your Age:",20);
if(age!=null)
{
    document.write("Your Age is "+age);
}
else{
    document.write("Your age is not given");
}
document.write('<br>');
//Confirm
let response=confirm("Are You Sure You Want To Delete?");
if(response)
{
    document.write("Deleted");

}
else
{
    document.write("Not Deleted");

}