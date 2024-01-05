"use strict";

//global scope
console.log(this); // globalObject-> window, global etc etc

//working inside a function
function x(){
    console.log(this);
}
x();
//this in non-strict mode (this substitution)
//if the value of this is undefined or null, this keyword will be replaced by globalObject only in non 
//strict mode

//depends on how a function is called
x(); //undefined
window.x(); //window

//this inside an object's method
const obj={
    a:10,
    x: function(){
        console.log(this);
    }
};
obj.x();

//call() method
const student1={
    name:"Akshay",
    printName: function(){
        console.log(this.name);
    }
};
const student2={
    name:"Deepika"
};
student1.printName();//Akshay
student1.printName.call(student2);//Deepika //value of this is student2
//apply and bind also there
//this in arrow functions
const obj2={
    a:10,
    x: ()=>{
        console.log(this);
    }
};
obj2.x();
//nested arrow function
const obj3={
    a:10,
    x: function(){
        const y=()=>{
            console.log(this);
        }
        y();
    }
};
obj3.x();
//this inside DOM elements => references to HTML elements
//this in classes and constructor