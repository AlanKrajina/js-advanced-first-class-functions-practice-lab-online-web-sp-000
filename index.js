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
  function compareFunction(a,b){
    if(a.revenue > b.revenue)
      return 1;
    else
      return -1;
  }

  drivers.sort(compareFunction);
}
