const user1 = {
    name: 'teacher',
    password: '1234'
};

console.log(user1);

console.log('username:', user1.name);

// Assignment to constant variable.
// user1 = 'gggg';

// הצלחנו לשנות ערך בתוך אוביקט שהוא קבוע
user1.password = 'abcd';
console.log('password:', user1.password);

// הצלחנו להוסיף תכונה בתוך אוביקט שהוא קבוע
console.log(user1.age); // undefined
user1.age = 20;
user1.age++;
console.log(user1.age); // 21

delete user1.password;
console.log(user1.password); // undefined

// פונקציה שמחזירה אוביקט
const createNewUser = (myName, myPass = "12345678", myAge = 20) => {
    const u = {
        name: myName,
        password: myPass,
        age: myAge
    };

    // console.log(u);
    return u;
};

const u1 = createNewUser('noa');
console.log(u1);
u1.password = 1;
console.log(u1);

const u2 = createNewUser('student', '1234');

// פונקציה שמקבלת אוביקט
// myUser = {name: 'noa', password: 1, age: 20}
const printCard = (myUser) => {
    const card = `<div>
        <h2>${myUser.name}</h2>
        <p>${myUser.password}</p>
    </div>`;
    console.log(card);
    document.body.innerHTML += card;
};

printCard(u1);
printCard(user1);
printCard(u2);