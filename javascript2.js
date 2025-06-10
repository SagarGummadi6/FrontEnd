let num = 5;
if (num % 2 === 0) {
    console.log(num + " is even");
} else {
    console.log(num + " is odd");
}
console.log("");


/* ------------------------------------------------------ */

let n = 4;
for (i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ` + n * i);
}
console.log("");


/* ------------------------------------------------------------- */

let day = 3;
switch (day) {
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday"); 
    break;
    case 3: console.log("Wednesday"); 
    break;
    case 4: console.log("Thursday"); 
    break;
    case 5: console.log("Friday"); 
    break;
    case 6: console.log("Saturday"); 
    break;
    case 7: console.log("Sunday"); 
    break;
    default: console.log("Invalid day");
}
console.log("");


/* ------------------------------------------------------ */

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of first 10 numbers:", sum);
console.log("");


/* --------------------------------------------------------------- */

let str = "Greater";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed string:", reversed);