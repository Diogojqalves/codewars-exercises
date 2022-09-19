var number=function(array){
    var counter = 1;
    var newArray = []
    if(array === []) {
       return []
       } else {
         for(var i = 0; array.length > i; i++) {
           newArray.push(counter + ': ' + array[i]);
           counter +=1;
         }
         return newArray;
       }
  }

console.log(number(["a", "b", "c"]));

//with map
var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }
