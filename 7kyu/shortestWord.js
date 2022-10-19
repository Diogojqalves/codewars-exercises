function findShort(s){
    const arr = s.split(' ');
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    console.log(smallest.length);
    return smallest.length
}

findShort("bitcoin take over the world maybe who knows perhaps");