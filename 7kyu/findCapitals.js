var capitals = function (word) {
	// Write your code here
  let result = []
  for(var i = 0; word.length > i; i++) {
    if(word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
};