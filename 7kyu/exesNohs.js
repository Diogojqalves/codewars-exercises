function XO(str) {
    //code here
  const myArr = str.split('')
  let x = 0
  let o = 0
  for(let i = 0; myArr.length > i; i++) {
    if(myArr[i] == "o" || myArr[i] == 'O') {
      o += 1
    } else if (myArr[i] == "x" || myArr[i] == 'X') {
      x += 1
    }
  }
  return x == o
}

XO('xo')
XO("xxOo")
XO("Oo")
XO("ooom")