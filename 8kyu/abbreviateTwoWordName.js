function abbrevName(name){
    const myArray = name.split(" ")
    return `${myArray[0][0].toUpperCase()}.${myArray[1][0].toUpperCase()}`
}

abbrevName("Sam Harris")
abbrevName("david mendieta")