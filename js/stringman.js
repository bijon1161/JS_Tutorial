let str="Bijon";
console.log(str.length);

let greet=`Hi ${str}`;
console.log(greet);

//String Concat
let str3=str.concat(" ","Mallik","\n",greet);
console.log(str3);

//
let str4="Bijon Mallik Learns JavaScript";
let substr=str4.substr(20,10);
console.log(substr);
// substr(starting,length) substring(starting)
/*
str.indexof('is',6); //after 6 position it will face
str.trim() //removes space
str.trimStart()
str.trimEnd()
str.toUpperCase()
str.toLowerCse()
str.replace('good','best')
str.includes('html) //returns boolean, works like indexof, if true index has value, if false index returns -1 for indexof()

 */