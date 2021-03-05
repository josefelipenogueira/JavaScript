let num1 = Number('32.66')
console.log(typeof num1)

let num2 = Number('25') 

num1 = String(num1)
console.log(typeof num1)


num2 = num2.toString()
console.log(typeof num2)

let num3 = 156.342
console.log(num3.toFixed(2))
console.log(num3.toFixed(2).replace('.',','))

let num4 = 2560.89
console.log(num4.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}))
console.log(num4.toLocaleString('pt-BR', {style: 'currency', currency:'USD'}))
console.log(num4.toLocaleString('pt-BR', {style: 'currency', currency:'EUR'}))

/*
 String => Number
  Number.parseInt(n)
  Number.parseFloat(n)
  Number(n)

*/

/*
 Number => String
  String(n)
  n.toString()

*/







    