const flip=(d, a)=>{
    //TODO
    if(d === 'R') {
      return a.sort(function(a, b){return a - b});
    } else {
     return a.sort(function(a, b){return b - a})
    }
  }