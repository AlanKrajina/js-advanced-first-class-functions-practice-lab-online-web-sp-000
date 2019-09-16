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
  return [...drivers].sort(compareFunction);
}


function driversByName(drivers){
  function compareFunction(a,b){
    return a[name].localeCompare(b[name]);
  }
  return [...drivers].sort(compareFunction);
}
