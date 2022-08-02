let parent = {
  fname: "naveen",
};

let child = {
  lname: "mohanty",
  [Symbol()]: "symbol Value",
};

Object.setPrototypeOf(child, parent); // child inherits property of parent object

console.log(child);

for (let key in child) { // By using in we can access parent objects keys but not symbol
  console.log(key);
}

console.log(Object.keys(child)) // it gets child own proprty keys array not inherted property

console.log(Object.values(child)) // it gets child own proprty values array not inherted property

console.log(Object.entries(child)) // it gets child own proprty [key,value] pair array not inherted property

console.log(Reflect.ownKeys(child)) // it gets child own proprty key and symbol array not inherted property





