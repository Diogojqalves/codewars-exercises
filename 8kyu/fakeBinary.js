function fakeBin(x){
    const myArray = x.split("");
    for(let i= 0; myArray.length > i; i++) {
      let number = parseInt(myArray[i], 0); 
      if( number < 5 ) {
        myArray[i] = '0';
      }  else {
        myArray[i] = '1';
      }
    }
    return myArray.join('')
  }

  fakeBin('45385593107843568')