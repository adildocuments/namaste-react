## what is currying function?

Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. In other words, it restructures a function so it takes one argument then returns another function that takes the next argument, and so on.

We will learn two ways to curry our functions. The first one is by using the bind function and the second is by using the concept of closures.

## Why it’s useful ?

Currying helps we avoid passing the same variable again and again.
It helps to create a higher order function.

## by using bind

let multiply = function (x, y){
console.log(x\*y);
}
// bind method creates the copy of the multiply function
let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(4) /// output (8)

let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(5) //output (15)

we can use multiply method to create multiply by 2, multiply by 3 and so on. We can make multiple copy of multiply method by pre setting the value of x as on line no 6.The actual definition of multiplyByTwo method looks like..

let multiply = function (y){
let x = 2;
console.log(x\*y);
}

Here is the basic example of currying a function using closures. The inner function have access to x even after it’s returning, this is something like pre setting the value of x and can be access to inner method.

let multiply = function(x){
return function(y){
console.log(x\*y);
}
}
multiply(4)(3)

or
let multiplyByTwo = multiply(2);
multiplyByTwo(4) // output 8
