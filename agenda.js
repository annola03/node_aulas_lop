const readline = require('readline-sync');
const fs = require('fs');
let agenda = {}

const CLS       = '\x1Bc';
const CIANO     = '\u001b[36m';
const NORMAL    = '\u001b[m';


function menu(){
    console.log('ESCOLHA:');
    console.log('1. cadastrar usuário');
    console.log('2. mostrar dados de usuário');
    console.log('3. listar cadastros');
    console.log('4. apagar registro');
    console.log('5. limpar toda a agenda');
    console.log('6. gravar arquivo');
    console.log('7. ler arquivo')
    console.log('8. sair')
    const op = Number(readline.question('\nOpcao: '))
    return op;
}

//--------------------------------------------------------------------
function cadastrarUsuario() {
    console.log(CLS);
    const nome = readline.question('\nnome: ');


    let fone;
    while (true) {
        fone = readline.question('\ntelefone: ');
        if (/^\d{11}$/.test(fone)) {
            break;
        } else {
            console.log('Telefone inválido! Digite 11 números, sem espaçamento.');
        }
    }


    let email;
    while (true) {
        email = readline.question('\nE-mail: ');
        if (/^[^\s@]+@[^\s@]+\.(com)$/.test(email)) {
            break;
        } else {
            console.log('E-mail inválido! Deve ter "@" e terminar com ".com".');
        }
    }

    if(nome == ''){
        console.log('Nome inválido!')
    }


    agenda[nome] = { ' / fone': fone, ' / email': email };
    readline.question(`${CIANO}** Digite Enter para continuar ** ${NORMAL}`);
}



//---------------------------------------------------------------------------

function mostrarDadosUsuario() {
    console.log(CLS);
    let haUsuario = false;

    for (let user in agenda) {
        haUsuario = true;
    }

    if (haUsuario == true) {
        for(const contato in agenda){
            console.log(contato);
        }
       let escolha= readline.question("Qual usuario voce quer: ")
    
       let usuarioCadastrado = false
    
       for(const contato in agenda) {
           if (contato == escolha) {
               console.log(`${contato} \t|\t Telefone: ${agenda[contato].Telefone} \t|\t E-mail: ${agenda[contato].email}`)
               usuarioCadastrado = true
           }       
       }
    
       if (usuarioCadastrado == false) {
          console.log('\n** Usuário', escolha ,'não cadastrado **\n')
       }
    }
    else {
        console.log('\n** Não há usuário cadastrado **\n');
    }
    readline.question(`${CIANO}** Digite Enter para continuar ** ${NORMAL}`);
}
//------------------------------------------------------------------------

function listarCadastro() {
    console.log(CLS);
    let haUsuario = false;

    for (let user in agenda) {
        haUsuario = true;
    }

    if (haUsuario == true) {
        for(const contato in agenda){
            console.log(contato);
        }
    }
        else {
            console.log('\n** Não há usuário cadastrado **\n');
        }
    
   
    readline.question(`${CIANO}** Digite Enter para continuar ** ${NORMAL}`);
}

//---------------------------------------------------------------------------
function apagarRegistro(){
    console.log(CLS);
    for(const contato in agenda){
        console.log(contato); }
    
    let fulano = (readline.question('escolha um contato para apagar: '))
        
        delete agenda[fulano]

    readline.question(`${CIANO}** Digite Enter para continuar ** ${NORMAL}`);
}

//----------------------------------------------------------------------------
function limparAgenda(){
    console.log(CLS);
    const resposta = readline.question('Deseja apagar a agenda? (s/n)')
    if(resposta == 's'){
        agenda = {}
        
    }
    console.log('\NAGENDA APAGADA COM SUCESSO!')

    readline.question(`${CIANO}** Digite Enter para continuar ** ${NORMAL}`);
    
    }


//-------------------------------------------------------------------------------
function gravarArquivo(){
    console.log(CLS);

    const file = 'agenda.json';
    const conteudoGravar = JSON.stringify(agenda);
    fs.writeFileSync(file, conteudoGravar);

    readline.question(`${CIANO}** Digite Enter para continuar ** ${NORMAL}`);
}

//---------------------------------------------------------------------------------
function lerArquivo(){
    console.log(CLS);
    const file = 'agenda.json';
    const fileBuffer = fs.readFileSync(file, 'utf-8');

    //converter JSON em objeto JavaScript
    const contentJson = JSON.parse(fileBuffer);

    readline.question(`${CIANO}** Digite Enter para continuar ** ${NORMAL}`);
}

//----------------------------------------------------------------------------------







while (true) {
    console.log(CLS);
    const op = menu()

    if (op == 1) {
        cadastrarUsuario();
    }
    else if (op == 2) {
        mostrarDadosUsuario();
    }
    else if (op == 3) {
        listarCadastro();
    }
    else if (op == 4) {
        apagarRegistro();
    }
    else if (op == 5){
        limparAgenda();
    }
    else if (op == 6){
        gravarArquivo();
    }
    else if (op == 7){
        lerArquivo();
    }
    else if (op == 8){
        break;
    }
}
