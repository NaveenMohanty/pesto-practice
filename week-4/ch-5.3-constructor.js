/**
 * In this it will be shown how constructor work in JS
 */

function Project(name, age) {

  this.name = name;
  this.age = age;

}

console.log(Project('Naveen', 24)) // here we are assign name and age to global value as this is global now

let proj = new Project('Mohanty', 20) // here an object "Project" is assigned to this --> Given below is explaination

/*
function Project(name, age) {

  this = {}
  this.setPrototypeOf(this, Project.prototype)

  this.name = name;
  this.age = age;

  if(function has return){
    if(Return is value is other then Object){
      return this
    } else {
      return what user set return value
    }
  } else {
    return this
  }

}
*/

console.log(proj)

console.log(Object.getPrototypeOf(proj) == Project.prototype)

// =======================================================================================/

function Project2(name, age) {

  this.name = name;
  this.age = age;

  // return 23; // Object Project2
  // return; // Object Project2
  // return "sdcsd" // Object Project2
  // return ()=>{} // will return function
  // return null // Object Project2
  // return {} // Object {}
}

console.log(new Project2('Ram', 1000000000000))

// ======================================================================

// How to add Object to be invoced with new keyword

function Project3(name, age) {
  // "use strict" // 1st way

  // if (!new.target) {  // 2nd way
  //   throw new Error("Invoke using new")
  // }

  if (!(this instanceof Project3)) { // 3rd way
    throw new Error("Invoke using new")
  }

  this.name = name;
  this.age = age;

}

console.log(new Project3('Site', 19900))

// console.log(Project3('Site', 19900)) // This will throw error

// ==========================================================================

// Here we will use ES6 Class operator to achive same functionality

class Project4 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Same as

// function Project4(name, age) {
//   this.name = name;
//   this.age = age;
// }


console.log(new Project4('Hanuman', 1098998789789))

// console.log(Project4('Hanuman', 1098998789789)) // This will throw error --> good thing about Class is it 
                                                  // doesn't allow to invoke without new


