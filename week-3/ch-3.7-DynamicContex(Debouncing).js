/**
 * What is Debouncing in coding?
 * Debouncing is a programming practice used to ensure that time-consuming tasks do 
 * not fire so often, that it stalls the performance of the web page.
 * In other words, it limits the rate at which a function gets invoked.
 */


function Debounce(func, waitTime) {
  var timeID;
  return function (...args) {
    timeID && clearTimeout(timeID);
    var that = this;
    timeID = setTimeout(() => {
      func.call(that, ...args);
    }, waitTime);
  };
}

let obj = {
  name: "naveen",
  print(num) {
    console.log(`name:${this.name} num:${num}`);
  },
};

let debounce = Debounce(obj.print, 1000);

for (let i = 0; i < 5; i++) {
  debounce.call(obj, i);
}
