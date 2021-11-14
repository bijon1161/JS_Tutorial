let input="";
switch(input)
{
    case 1:
    case "Y":
    case "Yes":
        window.alert("Continue...");
        break;
    case 0:
    case "N":
    case "No":
        window.alert("End...");
        break;
    default:
        alert("Wrong input");
}