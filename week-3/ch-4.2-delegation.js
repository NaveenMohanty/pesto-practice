let obj ={
    fname:'naveen'
}

console.log('fname' in obj) // in check the parent grand-parents and super grand parents property
console.log('toString' in obj)
console.log(obj.hasOwnProperty('fname')) 
console.log(obj.hasOwnProperty('toString')) // hasOwnProperty checks its own property


