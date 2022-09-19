const arr = [1, 2, 3, 4, 5, 6, 7]

//.filter, creates a new array
const newArr = arr.filter(a => a % 2 === 0); //if a is even, add to new array
console.log(newArr);

//.map
const mapArray = arr.map(a => a % 2 === 0);//return [false, true, false, true...]
console.log(mapArray);

const mapPowArray = arr.map(a => a * a); // returns [1, 4, 9, 16, 25...]

//reduce, reduces all items of an arra into a single one, accepts two args, the first and second element of the original array
//then uses the calculated element with the third element of the original array...
const numReduce = arr.reduce((num1, num2) => num1 + num2);


//filter even numbers, square the value with map and sum the total with reduce
const mixedArray = arr
    .filter(a => a % 2 === 0)
    .map(a => a * a)
    .reduce((a, b) => a + b);

console.log(mixedArray);

////
const orders = [
    {
        userId: 1,
        amount: 10
    },
    {
        userId: 1,
        amount: 15
    },
    {
        userId: 2,
        amount: 5
    },
    {
        userId: 2,
        amount: 100
    }
]

const exOrders = orders.filter(order => order.userId === 1).map(order => order.amount).reduce((a, b) => a + b);
console.log(exOrders);

//Sort
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//Sort Numbers
const flip=(d, a)=>{
    if(d === 'R') {
      return a.sort(function(a, b){return a - b}); //sort ascending
    } else {
     return a.sort(function(a, b){return b - a}) //sort descending
    }
  }

console.log(flip('R', [3, 2, 1, 2]));
console.log(flip('L', [1, 4, 5, 3, 5]));