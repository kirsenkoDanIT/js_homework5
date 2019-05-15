'use strict'

const createNewUser = () => {
    const newUser = {
        firstName: prompt('Enter your name', 'Ivan'),
        lastName: prompt('Enter last name', 'Ivanov'),
        birthday: prompt('Enter your date of birth', 'dd.mm.yyyy'),
        getLogin: function () {
            return (`${this.firstName[0]}${this.lastName}`).toLowerCase();
        },
        getAge: function () {
            let now = new Date();
            let birthday = (this.birthday).split('.').reverse().join('-');
            birthday = new Date(birthday);
            return parseInt((now - birthday) / (24 * 3600 * 365.25 * 1000))
        },
        getPassword: function () {
            const year = this.birthday.split('.').pop();
            return `${this.firstName[0].toUpperCase()}${this.lastName.toLowerCase()}${year}`;
        },
    };
    return newUser;
};
let newUserOuter = createNewUser();
// console.log(newUserOuter.getLogin());
// console.log(newUserOuter)
console.log(`name: ${newUserOuter.firstName}
last name: ${newUserOuter.lastName}
login: ${newUserOuter.getLogin()}
birthday: ${newUserOuter.birthday}
age: ${newUserOuter.getAge()}
password: ${newUserOuter.getPassword()}`);