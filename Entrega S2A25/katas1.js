function oneThroughTwenty() {

  lista = []


  for (i = 1; i <= 20; i++) {
    lista.push(i)
  }
  return lista

}

console.log(oneThroughTwenty())


function evensToTwenty() {

  lista2 = []

  for (pares = 1; pares <= 20; pares++) {
    if ((pares % 2) == 0) {
      lista2.push(pares)
    }
  }

  return lista2

}

console.log(evensToTwenty())


function oddsToTwenty() {

  lista3 = []

  for (impares = 0; impares <= 20; impares++) {
    if ((impares % 2) != 0) {
      lista3.push(impares)
    }
  }
  return lista3

}

console.log(oddsToTwenty())


function multiplesOfFive() {

  lista4 = []

  for (multfive = 1; multfive <= 100; multfive++) {
    if ((multfive % 5) == 0) {
      lista4.push(multfive)
    }
  }
  return lista4

}

console.log(multiplesOfFive())


function squareNumbers() {

  lista5 = []

  for (square = 1; square * square <= 100; square += 1) {
    lista5.push(square * square)
  }
  return lista5

}

console.log(squareNumbers())


function countingBackwards() {

  lista6 = []

  for (countb = 20; countb > 0; countb -= 1) {
    lista6.push(countb)

  }
  return lista6
}

console.log(countingBackwards())


function evenNumbersBackwards() {

  lista7 = []

  for (partras = 20; partras > 0; partras -= 2) {
    lista7.push(partras)
  }
  return lista7
}

console.log(evenNumbersBackwards())


function oddNumbersBackwards() {

  lista8 = []

  for (oddNumbers = 19; oddNumbers > 0; oddNumbers -= 2
  ) {
    lista8.push(oddNumbers)
  }
  return lista8
}

console.log(oddNumbersBackwards())


function multiplesOfFiveBackwards() {

  lista9 = []

  for (multipleFive = 100; multipleFive > 0; multipleFive -= 5) {
    lista9.push(multipleFive);
  }
  return lista9
}

console.log(multiplesOfFiveBackwards())


function squareNumbersBackwards() {

  lista10 = []

  for (squareBack = 100; squareBack * squareBack >= 1; squareBack -= 1) {
    if (squareBack * squareBack <= 100)
      lista10.push(squareBack * squareBack);
  }
  return lista10
}

console.log(squareNumbersBackwards())