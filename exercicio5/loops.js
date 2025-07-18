// Exercícios com loops

// Loop for básico
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Loop for com break
console.log("\\nLoop com break:");
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log("Encontrei o 6, parando o loop!");
    break;
  }
  console.log(i);
}

// Loop for com continue
console.log("\\nPulando números pares:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Pula o resto da iteração
  }
  console.log(i);
}

// Iterando sobre arrays
const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("\\nLista de frutas:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruta ${i + 1}: ${fruits[i]}`);
}

// a) Tabuada do 7
// imprimir a tabuada
//
console.log("Tabuada do 7:");

// Usamos um loop for
for (let i = 1; i <= 10; i++) {
  //  multiplicação de 7
  console.log(`7 x ${i} = ${7 * i}`);
}

//  b) Soma de um array de números
// array com números aleatórios
const numeros = [3, 7, 2, 9, 4];

// Inicializamos a variável 'soma' com zero
let soma = 0;

console.log("\nSomando os números do array:");

// Percorremos o array usando um loop
for (let i = 0; i < numeros.length; i++) {
  // A cada passo, mostramos qual número está sendo somado
  console.log(`Adicionando: ${numeros[i]}`);

  // E somamos esse número à variável 'soma'
  soma += numeros[i];
}

// mostra o resultado da soma total
console.log(`Soma total: ${soma}`);

// c) Encontrar o menor valor em um array
// Aqui temos um array com vários números
const valores = [18, 5, 23, 7, 2, 14];

// Começamos pensando primeiro número do array é o menor
let menor = valores[0];

console.log("\nProcurando o menor valor no array:");

// Agora percorremos o array
for (let i = 1; i < valores.length; i++) {
  // Verificamos se o número atual é menor que o menor
  if (valores[i] < menor) {
    menor = valores[i];
  }
}

// final do loop mostrando o valor
console.log(`Menor valor encontrado: ${menor}`);
