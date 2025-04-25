//FUNÇÃO SEM PARÂMETRO:
function hello(){
    console.log('BOM-DIA');
}
hello();

//FUNÇÃO SEM PARÂMETRO E RETORNA ALGO:
function love(){
    return [10, 4, 2, 3]
}
const ls = love();
console.log(ls);

//FUNÇÃO QUE RECEBE PARÂMETRO E NÃO RETORNA NADA:
function somar(n1, n2){
    const n3 = n1+n2;
    console.log(`${n1} + ${n2} = ${n3}`);
}
somar('a', 'bc');

//FUNÇÃO PARÂMETRIZADA QUE RETORNA ALGO:
function somar(n1, n2){
    const n3 = n1+n2
    return n3;
}
console.log(somar(8, 7));

//FUNÇÃO PARÂMETRIZAD VOM VALORES DEFAULT [PADRÃO]:
function somar(n1=0, n2=0){
    return n1+n2;
}
console.log(somar());


