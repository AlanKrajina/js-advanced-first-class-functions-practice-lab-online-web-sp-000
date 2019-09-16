// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(element) {
  console.log(element.name);
});
}

function logDriversByHometown(drivers,location){
  drivers.forEach(function(element) {
    if (element.hometown === location){
      console.log(element.name);
    }
});
}

function driversByRevenue(drivers){
  let array = [];
  const numberSorter = function (num1, num2) {
    return num1 - num2;
  };
  array.push(drivers.sort(numberSorter));
//  debugger
  array.forEach(function(element) {
  console.log(element.name);
});
}
