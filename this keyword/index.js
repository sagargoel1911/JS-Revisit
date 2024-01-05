"use strict";

//global scope
console.log(this); // globalObject-> window, global etc etc

//working inside a function
function x(){
    console.log(this);
}
x();
//this in strict mode (this substitution)
//if the value of this is undefined or null, this keyword will be replaced by globalObject only in non 
//strict mode

//depends on how a function is called
x(); //undefined
window.x(); //window