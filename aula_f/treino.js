console.log('ESCOLHA:');
console.log('1. somar');
console.log('2. subtrair');
console.log('3. multiplicar');
console.log('4. dividir');


const readline = require('readline-sync');
const opc= Number(readline.question('Digite uma opção: '));

if(opc==1){
    const n1= Number(readline.question('Digite n1: '));
    const n2= Number(readline.question('Digite n2: '));
    function somar(n1, n2){
        const n3 = n1+n2;
        console.log(`${n1} + ${n2} = ${n3}`);
    }
    somar(n1, n2);
}
else{
    if(opc==2){
    const n1= Number(readline.question('Digite n1: '));
    const n2= Number(readline.question('Digite n2: '));
    function sub(n1, n2){
        const n3 = n1-n2;
        console.log(`${n1} - ${n2} = ${n3}`);
    }
    sub(n1, n2);
    }
    else{
        if(opc==3){
            const n1= Number(readline.question('Digite n1: '));
            const n2= Number(readline.question('Digite n2: '));
            function mult(n1, n2){
                const n3 = n1*n2;
                console.log(`${n1} * ${n2} = ${n3}`);
            }
            mult(n1, n2);
        }
        else{
            if(opc==4){
                const n1= Number(readline.question('Digite n1: '));
                const n2= Number(readline.question('Digite n2: '));
                function divid(n1, n2){
                    const n3 = n1/n2;
                    console.log(`${n1} / ${n2} = ${n3}`);
                }
                divid(n1, n2);
            }
        }
    }
}
