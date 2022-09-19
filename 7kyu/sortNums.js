function solution(nums){
    if(!nums || nums.length < 1) {
    return []
  } else {
   nums.sort(function(a, b){return a - b});
    return nums;
    }
}