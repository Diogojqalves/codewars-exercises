function factorial(n)
{
  console.log(n);
  if(n < 0 || n > 12) {
    throw new RangeError();
    
  } else  if(n === 0 || n === 1){
        return 1
  } else {
         let count = 1;
        while(n >= 1) {
        count *= n;
        n -=1;
  }
    console.log(count);
    return count;
    }
}