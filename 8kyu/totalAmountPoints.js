function points(games) {
    var points = 0
    // your code here
    for(var i= 0; games.length > i; i++) {
        if(games[i][0] > games[i][2]){
           points += 3;
        } else if (games[i][0] == games[i][2]) {
          points += 1;
        } else {
          points = points;
        }
      }
    return points
  }