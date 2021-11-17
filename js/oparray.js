let book=["Math","Phy","Urdu","Bidu","Bangla"];

console.log(book.length);
book.push("Hindi") //add on last
console.log(book);
book.unshift("English"); //add on first
console.log(book);
book.pop(); //removes from last
console.log(book);
book.shift(); //removes from first
console.log(book);
book.splice(2.3) //starting index,number of element
let book1=["Math","Phy","Urdu","Bidu","Bangla"];
book1=[];
console.log(book1);
book1=["Math","Phy","Urdu","Bidu","Bangla"];
book1.length=0;
console.log(book1);

/*
some functions
indexof
Array.isArray(book);

*/

//String to Array
let text="This is random";
let wordArray=text.split(' '); //space will separate
console.log(wordArray);
wordArray=text.split('s'); //s will separate
console.log(wordArray);

//Array to String
wordArray=book.join(' '); //added by space
console.log(wordArray);
wordArray=book.join('-'); //added by hypen
console.log(wordArray);

//forEach function

book.forEach(myfu)
function myfu(value)
{
    console.log(value);
}


 