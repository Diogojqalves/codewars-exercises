function disemvowel(str) {
    const noVowels = str.replace(/[aeiouAEIOU]/gi, '');
    console.log(noVowels)
    return noVowels;
  }

  disemvowel("This website is for losers LOL!")