const valores = [7.7, 8.32, 32, 9.2, 'jose']
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id :2}, false, 'cometas')
console.log(valores)

console.log(valores.pop())   //remove o ultimo item do array

delete valores[2]  //deleta o item 2 do array
console.log(valores)

console.log(typeof valores)