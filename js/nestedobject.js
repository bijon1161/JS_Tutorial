let user = {
    id: 101,
    email: "bijon.ndc.pust@gmail.com",
    personalInfo: {
        firstname:"Bijon",
        lastname:"Mallik",
        name: function(){
            return this.firstname+" "+this.lastname;
        },
        address: {
            street: "KM Das Lane",
            city: "Dhaka",
            country: "Bangladesh",
        }
    }

};

console.log(user);
console.log(user.personalInfo.name());
console.log(user.personalInfo.address.city);