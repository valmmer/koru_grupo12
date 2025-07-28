exercicio 2 projeto 3 cassia deiro// Exercício 2: Manipulação de Strings
// Objetivo: Praticar operações básicas com strings

// 1. Declaração e concatenação
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;

console.log("Nome completo:", fullName);

// 2. Template strings (ES6)
const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

// 3. Propriedades e métodos de strings
console.log("Comprimento do nome:", fullName.length);
console.log("Nome em MAIÚSCULAS:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());

// ------------------
// Desafios:

// a) Extraia o primeiro nome usando slice
const primeiroNome = fullName.slice(0, fullName.indexOf(" "));
console.log("Primeiro nome (usando slice):", primeiroNome);

// b) Verifique se o nome completo contém a letra "a"
const contemA = fullName.toLowerCase().includes("a");
console.log("O nome completo contém a letra 'a'?", contemA);

// c) Substitua "Silva" por outro sobrenome usando replace
const novoSobrenome = fullName.replace("Silva", "Oliveira");
console.log("Nome com novo sobrenome:", novoSobrenome);



