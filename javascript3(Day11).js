let num = 4;
function myfunction(){
    k=0
    for(let i=num;i>=1;i--){
        k+= i;
    }
    console.log(k);
}
myfunction();

/* ---------------------------------------------- */

let array = [4,3,5,3,7,5];
function largestArray(){
    let max = Math.max(...array);
    console.log(max);
}
largestArray();

/* ---------------------------------------------------- */


const square = function(x) {
    return x * x;
};


const cube = (x) => x * x * x;

console.log(square(4));
console.log(cube(3));

/* ------------------------------------------------------- */

function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());


/* ----------------------------------------------------- */

(function(){
    Num1=3;
    Num2=4;
    console.log(a+b);
    console.log('This is it.');
})();


