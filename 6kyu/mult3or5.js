function solution(number){
    if(number <= 2) {
      return 0;
    } else {
      let counter = 3;
      let total = 0;
      while(counter < number){
        if(counter % 3 === 0 || counter % 5 === 0) {
            total += counter;
        }
        counter += 1
      }
      return total;
    }
  }