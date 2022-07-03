/**
 * new keyword create object from a fuction.
 * in JS there is no class concept so fuction act as constructor when used with new
 */
// Try uncommenting use strict and run
// 'use strict'

function fuc(name){
    this.name = name
}

fuc("naveen")
console.log(global.name)

let fuc1 = new fuc('naveen')
console.log(fuc1)