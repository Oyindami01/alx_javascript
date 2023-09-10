const callMeMoby = function (x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction();
  }
}

console.log(callMeMoby(3, function(){
  console.log('c is fun')
}))