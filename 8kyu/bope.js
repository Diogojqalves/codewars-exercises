function magNumber(info){
    let pt = 17;
    let m4 = 30;
    let m16 = 30;
    let psg = 5;
    let shoots = info[1] * 3;
    let counter = 1;
    if(info[1] < 1){
        return 0
    }
    switch(info[0]) {
      case 'PT92':        
          if (pt > shoots){
            return 1;
          } else {
            let useCase = 17;
            while(useCase < shoots) {
              counter += 1;
              useCase = 17 * counter;
            }
            return counter;
          }
      case 'M4A1':
        if (m4 > shoots){
            return 1;
          } else {
            let useCase = 30;
            while(useCase < shoots) {
              counter += 1;
              useCase = 30 * counter;
            }
            return counter;
        }
      case 'M16A2':
        if (m16 > shoots){
            return 1;
          } else {
            let useCase = 30;
            while(useCase < shoots) {
              counter += 1;
              useCase = 30 * counter;
            }
            return counter;
        }
      case 'PSG1':
        if (psg > shoots){
            return 1;
          } else {
            let useCase = 5;
            while(useCase < shoots) {
              counter += 1;
              useCase = 5 * counter;
            }
            return counter;
        }
        }
  }

console.log(magNumber(['PT92', 6]));
console.log(magNumber(['M4A1', 8]));
console.log(magNumber(['M16A2', 19]));
console.log(magNumber(["PSG1", 31]));
console.log(magNumber(["PT92", 19]));