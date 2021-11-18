let person={
    firstName: 'Bijon',
    lastName: 'Mallik',
    address: 'Tikatuli,Dhaka'
};

console.log(person);


//two ways to print
console.log(person.firstName);
console.log(person['firstName']);

//modify
person.lastname="Mallikkk";
console.log(person);

//append
person.age=25;
console.log(person);

//delete
delete person.lastName;
console.log(person);

//to check properties is in object
console.log('height' in person); //returns boolean
console.log(person.age); //result undefined

//another way to know object value
//for-in loop
for (let key in person)
{
    console.log(key+": "+person[key]); //person.key won't work & key doesn't need quotation
}