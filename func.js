// כמעט ולא משתמשים במחלקות
// פונקציה היא לא בתוך מחלקה

// = ערך ברירת מחדל אם לא שלחו ערך
// אפשרי רק לפרמטרים האחרונים בפונקציה
// כאילו העמסת פונקציות
// add(), add(x), add(x, y)
function add(x = 0, y = 0) {
    console.log('values:', x, y);

    return x + y;
}

console.log(add(6, 90));

// ceil - שלם
// *10   - 1...9
const n1 = Math.ceil(Math.random() * 10);
const n2 = Math.ceil(Math.random() * 10);
const x = add(n1, n2);
// x = "hello";
console.log(`${n1} + ${n2} = ${x}`);

let xxx;
// NaN - not a number
// console.log(add(100, undefined));
console.log(add(100)); // זהה לשורה שלעיל

console.log(add()); // 0

// undefined פונקציה שלא מחזירה ערך, מחזירה אוטומטית
function helloTo(username = 'guest') {
    console.log(`hello ${username}!`);
    // return
    // return undefined
}

// יותר פרמטרים - לא מתייחס
const ans = helloTo('shira', 'cohen');
console.log(ans); // undefined

helloTo('michal');
console.log(helloTo());// undefined

console.log('=====================================');
// 1.
function mult1(a, b) {
    return a * b;
}
console.log(mult1(20, 3));

// 2.
const mult2 = function (a, b) {
    return a * b;
};
console.log(mult2(20, 3));

// 3. arrow function, lambda
// בד"כ יותר קצרה
const mult3 = (a, b) => {
    return a * b;
};
console.log(mult3(20, 3));

// 1. אם הפונקציה רק מחזירה ערך, ניתן למחוק ריטרן וצומדיים
// const mult4 = (a, b) => { a * b }; // undefined
// const mult4 = (a, b) => return a * b; // error
const mult4 = (a, b) => a * b;

console.log(mult4(20, 3));


const helloTo2 = (username = 'guest') => console.log(`hello ${username}!`);

// 2. () יש פרמטר אחד בלי ערך ברירת מחדל, אפשר להוריד
const double = x => x * 2;

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomBetween(5, 10)); // 5...10
console.log(randomBetween(2, 10)); // {0...8} + 2 = {2...10}

// שתי שמות לפונקציה
const rand = randomBetween;
console.log(rand(5, 10));
console.log(randomBetween(5, 10));

// גלובלי - ניתן לגשת בכל העמוד מכאן ואילך 
let num = 200;

function stam(x) {
    let num = 100; // לוקאלי - ניתן לגשת רק בפונקציה 
    console.log(num); // 100    

    console.log('stam:', typeof x);
}

stam(10); // 100
console.log(num); // 200

stam(10); // number
stam("A") // string
stam(helloTo2) // function
stam(randomBetween) // function