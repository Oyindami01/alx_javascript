const callMeMoby = function (x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }

  console.log(callMeMoby(5, function(){
    console.log('Where I am')
  }))