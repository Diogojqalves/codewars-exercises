function stringy(size) {
    // your code here
    const a = "1"
    const b = "0"
    let counter = 0;
    let response = "";
    while(counter < size) {
      response += a;
      counter += 1;
      if(counter < size) {
        response += b;
        counter += 1;
      }
    }
    return response
  }