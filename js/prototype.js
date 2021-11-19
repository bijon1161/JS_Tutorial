function Student(first,last,age)
{
   this.firstName=first;
   this.lastName=last;
   this.age=age;
}
let student1= new Student("Bijon","Mallik",25);
let student2= new Student("Eshita","Nahar",25);
let student3= new Student("Shakil","Ahmed",25);

Student.prototype.nationality="Bangladeshi";
Student.prototype.name= function()
{
    return this.firstName+ " "+this.lastName;
}
console.log(student1);
console.log(student3.name());