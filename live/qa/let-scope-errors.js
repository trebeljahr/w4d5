const counter = {
  number: 1,
};

function increments(obj) {
  console.log(obj.number);
  obj.number += 1;
}

increments(counter);

console.log(counter);

let number = 0;

function incrementsFromOutsideScope() {
  number += 1;
  console.log("Hello");
  console.log(number); // 1
}

incrementsFromOutsideScope();
console.log(number); // 2

function stringify() {
  number = `${number}`;
}

stringify();
console.log(number);
incrementsFromOutsideScope();
