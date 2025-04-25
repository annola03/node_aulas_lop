// DESENHA UMA MOLDURA EM FRASE
const readline = require('readline-sync');
const ch = '█';

function barra(qtde){

    for(let i=0; i<qtde+4; i++){
        process.stdout.write(ch);
     }
}
//fora da funçao

const frase = readline.question(' \nDigite uma frase: ');
barra(frase.length);
console.log(`\n${ch} ${frase} ${ch}`);
barra(frase.length)