function executeXTimes(x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction();
  }
}

function myFunction() {
  console.log("Where I am!");
}

executeXTimes(5, myFunction);