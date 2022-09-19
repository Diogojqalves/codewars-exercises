function sameCase(a, b){
  let regex = /[a-z]/; 
  let reg2= /[A-Z]/;
  let exists = regex.test(a);
  let exists2 = regex.test(b);
  let exists3 = reg2.test(a);
  let exists4 = reg2.test(b);
  if (exists && exists4) {
    return 0;
  } else if(exists3 && exists2) {
    return 0;
  } else if (exists && exists2) {
    return 1;
  } else if(exists3 && exists4){
    return 1;
    } else {
    return -1;
  }
}