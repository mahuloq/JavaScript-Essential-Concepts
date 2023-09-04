// console.log(notHoisted);
// notHoisted();

// var notHoisted = function () {
//   console.log("test");
// };

console.log(Hoisted);
Hoisted();

function Hoisted() {
  console.log("test");
}
