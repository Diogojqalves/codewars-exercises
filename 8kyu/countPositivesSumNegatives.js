function countPositivesSumNegatives(input) {
    if(input) {
        var arr = [];
        var positiveCount = 0;
        var sumNegative = 0;

        for(var i = 0; input.length > i; i++) {
            if(input[i] > 0) {
                positiveCount += 1;

            } else if(input[i] < 0) {
                 sumNegative += input[i];
            }
        }

        if(positiveCount == 0 && sumNegative == 0) {
             return []
        
        } else {
            arr.push(positiveCount);
            arr.push(sumNegative);
            return arr
         }
    } 
    else {
      return []
    }
}