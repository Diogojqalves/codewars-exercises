function filter_list(l) {
    var myarr = []
    for(var i = 0; l.length > i; ++i) {
      if(Number.isInteger(l[i])) {
         myarr.push(l[i]);
         }  
      }
    // Return a new array with the strings filtered out
  return myarr;
  }

  // or

  function filter_list(l) {
    return l.filter(Number.isInteger);
  }