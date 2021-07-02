// Dados do input do Nome da Mercadoria
let mercadoria = document.querySelector('#mercadoria');
let labelMercadoria = document.querySelector('#labelMercadoria');
let divMercadoria = document.querySelector('#divMercadoria');
let validMercadoria = false; //Verifica se o campo foi preenchido

// Dados do input do Valor
let valor = document.querySelector('#valor');
let labelValor = document.querySelector('#labelValor');
let divValor = document.querySelector('#divValor');
let validValor = false;

// Divs de mensagem do botão (Erro ou Sucesso)
let msgErro = document.querySelector('#msgErro');
let msgSucesso = document.querySelector('#msgSucesso');

mercadoria.addEventListener('keyup', () => { //Validando preenchimento input Mercadoria
    if(mercadoria.value.length <= 1){ //Se o campo tiver menos de 2 caracteres
        labelMercadoria.setAttribute('style', 'color: red'); //Muda a cor do nome
        divMercadoria.innerHTML = '*Insira no mínimo 2 caracteres'; //Insere texto na div de validação JS
        validMercadoria = false; //Campo vazio
    } else {
        labelMercadoria.setAttribute('style', 'color: green'); 
        divMercadoria.innerHTML = ''; //Retira texto da div de validação JS
        validMercadoria = true; //Campo preenchido
    }
})

valor.addEventListener('keyup', () => { //Validando preenchimento input Mercadoria
    if(valor.value.length <= 2){
        labelValor.setAttribute('style', 'color: red');
        divValor.setAttribute('style', 'color: red');
        divValor.innerHTML = '*Insira no mínimo 3 caracteres';
        validValor = false;
    } else {
        labelValor.setAttribute('style', 'color: green');
        divValor.innerHTML = '';
        validValor = true;
    }
})

function validarForm() {
    if(validMercadoria && validValor){
        msgSucesso.setAttribute('style', 'display: block'); //Mostra a caixa da div
        msgSucesso.innerHTML = 'Transação Adicionada!'; // Preenche texto da div
        // Não mostrar a mesnagem de Erro
        msgErro.setAttribute('style', 'display: none')
        msgErro.innerHTML = '';
    } else {
        msgErro.setAttribute('style', 'display: block')
        msgErro.innerHTML = 'Preencher todos os campos';
        // Não mostrar a mesnagem de Sucesso
        msgSucesso.setAttribute('style', 'display: none');
        msgSucesso.innerHTML = '';
    }
}

// Máscara do valor (Digitar apenas números)
function mascaraNumero(e) {
    e.preventDefault() // Evita que a qualquer tecla seja digitada
    //console.log(e)
    if ("1234567890".indexOf(e.key) != -1) { // Adiciona exceção dos números
        document.querySelector('input[name=valor]').value += e.key; // Insere os números no campo
    } 
}

// Salvar no LocalStorage
var salvarStorage = function() {
    var tipoTransacao = document.getElementById('transacao').value; //Resgata campo do HTML
    var tipoMercadoria = document.getElementById('mercadoria').value;
    var tipoValor = document.getElementById('valor').value;
    localStorage.setItem('Tipo de Transacao', tipoTransacao); // Insere no localStorage
    localStorage.setItem('Tipo de Mercadoria', tipoMercadoria);
    localStorage.setItem('Valor', tipoValor);
}

//Adicionar info para tablea

function criarTabela(transacao, mercadoria, valor) {
    var tabela = document.getElementById('tbody');
    var quantidadeLinhas = tabela.rows.length;
    var linha = tabela.insertRow(quantidadeLinhas); // Inserir linha após a última
    var tipoTransacao = document.getElementById('transacao').value; //Resgata campo do HTML

    // Inserir as colunas
    var cellTransacao = linha.insertCell(0);
    var cellMercadoria = linha.insertCell(1);
    var cellValor = linha.insertCell(2);

    // Inserir o campo do formulario na celular
    cellMercadoria.innerHTML = mercadoria;
    cellMercadoria.className = 'tr-border';
    cellValor.innerHTML = valor;
    cellValor.className = 'tr-right tr-border';
    cellTransacao.className = 'tr-border tipoTransacao';

    if (tipoTransacao == 'compra') {
        cellTransacao.innerHTML = '-';
    } else {
        cellTransacao.innerHTML = '+';
    }

}

//Segunda aula

// 46 minutos do video
// 1h02 local storage
// 1h10 lógica pra passar informação do form para a tabela 

// ULTIMA AULA -28/06-
// Local Storage 40min
// Aplicação 1h



// -------------AULA 30/06--------------


// SOMA DOS VALORES

// let total = 0;

// for (let prod of produtos) {
//     if (prod.tipo == 'Venda') {
//         total += prod.valor
//     } else {
//         total -= prod.valor
//     }
// }

// MESMA COISA COM O MAP

// produtos.forEach(prod) => {
//     if (prod.tipo == 'Venda') {
//         total += prod.valor
//     } else {
//         total -= prod.valor
//     }
// });

// preencher tabela

// document.querySelector('input[type="submit"]').value = 'texto'
// input[type="submit"] ------> tag do html a ser subtituida ou incrementada
