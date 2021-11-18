let person={
    firstName: 'Bijon',
    lastName: 'Mallik',
    address: 'Tikatuli,Dhaka',
    sayHello(){
        console.log("Hello!");
    },

    get getname()
    {
       return this.firstName.toUpperCase();
    },

    set setname(n)
    {
        this.firstName=n.toUpperCase();
    }
};
console.log(person.getname);
person.firstName="Eshita";
console.log(person.firstName);
person.setname='Shakil';
console.log(person.firstName);

