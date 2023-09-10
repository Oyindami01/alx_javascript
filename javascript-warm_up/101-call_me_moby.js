const callMeMoby = require('./101-call_me_moby').callMeMoby;
callMeMoby(3, function () {
  console.log('C is fun');
});

function executeXTimes(x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }