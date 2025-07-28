// Lista de alunos com nome, idade e notas
const estudantes = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

// Variáveis para controle geral
let totalTurma = 0;      // Soma das médias de todos os alunos
let aprovados = 0;       // Quantidade de alunos aprovados
let reprovados = 0;      // Quantidade de alunos reprovados
let maiorMedia = 0;      // Armazena a maior média encontrada
let alunoTop = "";       // Nome do aluno com maior média

console.log("Resultados dos alunos:\n");

// Loop para percorrer cada aluno da lista
estudantes.forEach((aluno) => {

  // a) Para cada aluno, calcule a média das notas
  const media = aluno.grades.reduce((a, b) => a + b, 0) / aluno.grades.length;

  // Soma essa média ao total da turma (usado na letra e)
  totalTurma += media;

  // b) Determine se cada aluno foi aprovado ou reprovado (média >= 70)
  const status = media >= 70 ? "Aprovado" : "Reprovado";

  // c) Conte quantos alunos foram aprovados e quantos foram reprovados
  if (status === "Aprovado") {
    aprovados++;
  } else {
    reprovados++;
  }

  // d) Encontre o aluno com a maior média
  if (media > maiorMedia) {
    maiorMedia = media;
    alunoTop = aluno.name;
  }

  // Exibe os dados do aluno no console
  console.log(`Aluno: ${aluno.name}`);
  console.log(`Idade: ${aluno.age}`);
  console.log(`Notas: ${aluno.grades.join(", ")}`);
  console.log(`Média: ${media.toFixed(2)}`);
  console.log(`Status: ${status}`);
  console.log("----------------------------");
});

// e) Calcule a média geral da turma
const mediaGeral = totalTurma / estudantes.length;

// Exibe estatísticas gerais no console
console.log(`Total de alunos aprovados: ${aprovados}`);
console.log(`Total de alunos reprovados: ${reprovados}`);
console.log(`Aluno com a maior média: ${alunoTop} (${maiorMedia.toFixed(2)})`);
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
