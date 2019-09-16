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
  drivers.sort(function(a, b) {
    return a.revenue- b.revenue;

 })
}
