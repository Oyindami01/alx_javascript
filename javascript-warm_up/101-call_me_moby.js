function callMeMoby(x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }
  
  function executeXTimes() {
    console.log("Where I am!");
  }
  
  callMeMoby(5, executeXTimes);
  
  
  
  
  
  
  