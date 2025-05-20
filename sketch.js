let idadeUsuario;
let gostaRPG, gostaFPS, gostaTerror, gostaSobrevivência;
let filmesRecomendados = [];

function setup() {
 createCanvas(600, 400);
 background(240);
 textSize(16);
 fill(50);
 text("Recomendador de Jogos", 20, 30);
 // Coletar idade
 idadeUsuario = int(prompt("Qual sua idade?"));
 // Coletar preferências
 gostaRPG = prompt("Você gosta de jogos RPG? (sim/não)").toLowerCase() === "sim";
 gostaFPS = prompt("Você gosta de jogos de FPS? (sim/não)").toLowerCase() === "sim";
 gostaTerror = prompt("Você gosta de jogos de terror? (sim/não)").toLowerCase() === 
"sim";
 gostaSobrevivência = prompt("Você gosta de jogos de sobrevivência? (sim/não)").toLowerCase() 
=== "sim"; 
  
   for (let filme of filmes) {
 if (idadeUsuario >= filme.idade) {
 if (
 (gostaRPG && filme.categorias.includes("RPG")) ||
 (gostaFPS && filme.categorias.includes("FPS")) ||
 (gostaTerror && filme.categorias.includes("terror")) ||
 (gostaSobrevivência && filme.categorias.includes("sobrevivência"))
 ) {
 filmesRecomendados.push(filme.nome);
 }
 }
 }

   if (filmesRecomendados.length > 0) {
 text("Jogos recomendados para você:", 20, 70);
 for (let i = 0; i < filmesRecomendados.length; i++) {
 text("- " + filmesRecomendados[i], 40, 100 + i * 25);
 }
 } else {
 text("Nenhum jogo disponível para sua idade e preferências.", 20, 70);
 }
}

  let filmes = [
 { nome: "Call of Duty BO2", idade: 10, categorias: ["FPS"] },
 { nome: "Battlefield 1", idade: 10, categorias: ["FPS"] },
 { nome: "Fallout 4", idade: 10, categorias: ["RPG"] },
 { nome: "Skyrim", idade: 10, categorias: ["RPG"] },
 { nome: "Outlast", idade: 16, categorias: ["terror"] },
 { nome: "Alien Isolation", idade: 14, categorias: ["terror"] },
 { nome: "Terraria", idade: 10, categorias: ["sobrevivência"] },
 { nome: "Minecraft", idade: 0, categorias: ["sobrevivência"] },   
]
