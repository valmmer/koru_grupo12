// Exercícios de operações matemáticas

// Operações básicas
const a = 10;
const b = 3;

console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Módulo (resto):", a % b);
console.log("Exponenciação:", a ** b); // a elevado a b

// Incremento e decremento
let counter = 5;
console.log("Valor inicial:", counter);
console.log("Pós-incremento:", counter++); // Mostra 5, depois incrementa
console.log("Novo valor:", counter);       // Agora mostra 6
console.log("Pré-incremento:", ++counter); // Incrementa primeiro, depois mostra 7
console.log("Valor final:", counter);      // Mostra 7

// Conversão de tipos
const numberAsString = "42";
console.log("String original:", numberAsString, typeof numberAsString);

const convertedNumber = Number(numberAsString);
console.log("Depois de converter:", convertedNumber, typeof convertedNumber);

console.log('\nExercício 3: Operações Matemáticas')

//a) Calcule a média de 3 números: 15, 25 e 38

console.log('\nA - Calculando Média\n')

let num1 = 15;
let num2 = 25;
let num3 = 38;

console.log('Números para média: ' + num1, num2, num3);

media = (num1+num2+num3)/3;

console.log('A média de ' + num1 +', '+ num2 + ' e ' + num3 + ' é ' + media + '.');

//b) Converta a string "123.45" em um número

console.log('\nB - Convertendo String\n')

let stringOriginal = '123.45';
let stringConverted = Number(stringOriginal);

console.log('String Original: ' + stringOriginal + '\nTipo: ' + typeof(stringOriginal))

console.log('\nString Convertida: ' + stringConverted + '\nTipo: ' + typeof(stringConverted));

//c) Arredonde o resultado de 9.7 dividido por 2 para o inteiro mais próximo

console.log('\nC - Arredondando Números\n')

let numeroArredondar = 9.7/2;

numeroArredondado = numeroArredondar.toFixed(0)

console.log('Número Antes de Arredondar: ' + numeroArredondar)
console.log('Número Depois de Arredondar: ' + numeroArredondado + '\n')