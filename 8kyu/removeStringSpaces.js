function noSpace(x){
    var str = x.replace(/\s+/g, '');
    return str
  }

/*
The Regex

\s is the regex for "whitespace"
 g is the "global" flag, meaning match ALL \s (whitespaces).
*/