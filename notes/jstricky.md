1.  console.log(age)  ReferenceError //Cannot access 'age' before initialization
    let age = 23;
    console.log(age);

    console.log(age)   // undefined
    var age = 23;
    console.log(age)  // 23 
    due to hoisting

2. console.log((5+true)*false) // 0