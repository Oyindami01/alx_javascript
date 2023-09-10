function executeXTimes(x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }
  
  
  
  executeXTimes(5, myFunction);
  
  