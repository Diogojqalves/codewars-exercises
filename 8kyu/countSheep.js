var countSheep = function (num){
    //your code here
    const sheep = 'sheep...';
    let count = '';
    if(num < 1) {
      return ""
    } else {
      for(let i = 1; i <= num; i++) {
        count += `${i} ${sheep}`
      }
      return count
    }
  }

countSheep(0)
countSheep(1)
countSheep(2)
countSheep(3)
/* 
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
  */