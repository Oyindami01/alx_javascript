const callMeMoby = function (x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }
  
  function executeXTimes() {
    console.log("Where am I");
  }
  
  callMeMoby(5, executeXTimes);
  