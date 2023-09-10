const callMeMoby = function (x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }
  
  function executeXTimes() {
    console.log("Executing");
  }
  
  callMeMoby(5, executeXTimes);
  