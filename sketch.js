let idadeUsuario;
let gostaFantasia, gostaAventura, gostaTerror, gostaAção;
let filmesRecomendados = [];

function setup() {
 createCanvas(600, 400);
 background(240);
 textSize(16);
 fill(50);
 text("Recomendador de Filmes", 20, 30);
 // Coletar idade
 idadeUsuario = int(prompt("Qual sua idade?"));
 // Coletar preferências
 gostaFantasia = prompt("Você gosta de filmes de fantasia? (sim/não)").toLowerCase() === "sim";
 gostaAventura = prompt("Você gosta de filmes de aventura? (sim/não)").toLowerCase() === "sim";
 gostaTerror = prompt("Você gosta de filmes de terror? (sim/não)").toLowerCase() === 
"sim";
 gostaAção = prompt("Você gosta de filmes de Ação? (sim/não)").toLowerCase() 
=== "sim"; 
  
   for (let filme of filmes) {
 if (idadeUsuario >= filme.idade) {
 if (
 (gostaFantasia && filme.categorias.includes("fantasia")) ||
 (gostaAventura && filme.categorias.includes("aventura")) ||
 (gostaTerror && filme.categorias.includes("terror")) ||
 (gostaAção && filme.categorias.includes("ação"))
 ) {
 filmesRecomendados.push(filme.nome);
 }
 }
 }

   if (filmesRecomendados.length > 0) {
 text("Filmes recomendados para você:", 20, 70);
 for (let i = 0; i < filmesRecomendados.length; i++) {
 text("- " + filmesRecomendados[i], 40, 100 + i * 25);
 }
 } else {
 text("Nenhum filme disponível para sua idade e preferências.", 20, 70);
 }
}

  let filmes = [
 { nome: "1917", idade: 14, categorias: ["ação"] },
 { nome: "Paddington", idade: 0, categorias: ["fantasia", "aventura"] },
 { nome: "A História Sem Fim", idade: 10, categorias: ["drama", "fantasia", 
"aventura"] },
 { nome: "Senhor dos Anéis: A Sociedade do Anel", idade: 12, categorias: ["fantasia", "aventura"] },
 { nome: "Corra!", idade: 16, categorias: ["terror"] },
 { nome: "O Exorcista", idade: 14, categorias: ["terror"] },
 { nome: "Star Wars: Uma Nova Esperança", idade: 12, categorias: ["ação", "fantasia"] },
 { nome: "Interestelar", idade: 0, categorias: ["aventura"] },   
]
