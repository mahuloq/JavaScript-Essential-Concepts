var varGlobal = "Global";
let letGlobal = "Global";
const contGlobal = "Global";
console.log(varGlobal);
console.log(letGlobal);
console.log(contGlobal);

let test = function () {
  console.log(varGlobal);
  console.log(letGlobal);
  console.log(contGlobal);
  varGlobal = "taco";
  letGlobal = "taco";
  console.log(varGlobal);
  console.log(letGlobal);
};

test();
console.log(varGlobal);
console.log(letGlobal);
console.log(contGlobal);
