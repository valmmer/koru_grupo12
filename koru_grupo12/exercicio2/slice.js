// Segundo desafio 
// Letra a) Extraia o primeiro nome usando o método slice ou substring;

const fullName = "Maria Silva";
console.log ("Nome completo: ", fullName);     // Definição do nome completo como "Maria Silva"

let firstName = fullName.slice (0,5); // Utilizei o slice para extrair o primeiro nome, 0 sendo a letra M e 5 sendo a letra A
let lastName = fullName.slice (6, 12); // Utilizei o slice para extrair o último nome, 6 sendo a letra S e 12 sendo a letra A

console.log (firstName); // Armazenamento das informações
console.log (lastName); // Armazenamento das informações