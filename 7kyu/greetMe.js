var greet = function(name) {
    const n = name.toLowerCase();
    const str = n.charAt(0).toUpperCase() + n.slice(1);
    return 'Hello ' + str + '!';
  };