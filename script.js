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

// Divs de mensagem do botão
let msgErro = document.querySelector('#msgErro');
let msgSucesso = document.querySelector('#msgSucesso');

mercadoria.addEventListener('keyup', () => { //Validando preenchimento input Mercadoria
    if(mercadoria.value.length <= 2){ //Se o campo tiver menos de 3 caracteres
        labelMercadoria.setAttribute('style', 'color: red'); //Muda a cor do nome
        divMercadoria.innerHTML = '*Insira no mínimo 3 caracteres'; //Insere texto na div de validação JS
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

// function validarForm() {

//     var mercadoria = document.getElementById("mercadoria").value;
//     var valor = document.getElementById("valor").value;
//     var existeErro = false;

//     if(mercadoria == "") { // valida mercadoria
//         existeErro = true;
//         let validarMercadoria = document.getElementById("validarMercadoria");
//         console.log('validarMercadoria', validarMercadoria);
//         validarMercadoria.innerHTML = "*Preencha o nome da mercadoria";
//         //console.log('validarMercadoria depois', validarMercadoria);
//     }

//     if(valor == "") { // valida valor
//         existeErro = true;
//         let validarValor = document.getElementById("validarValor");
//         console.log('validarValor', validarValor);
//         validarValor.innerHTML = "*Preencha o valor";
//         //console.log('validarValor depois', validarValor);
//     }

//     if(!existeErro) { // armazena no local storage
//         localStorage.setItem('Cliente', mercadoria);
//     }

//     // localStorage.setItem('formulario', JSON.stringify((mercadoria: 'mercadoria', valor: 'valor'));

    
// }


// Máscara da moeda (Não entendi)
function formatoMoeda() {

    var elemento = document.getElementById('valor');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
}

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

// \/ nao entendi mt bem \/
// produtos.reduce((total, prod) -> {

// })

// TOTAL.VALOR += (PROD.TIPO == VENDA) ? PORD.VALOR : PORD.VALOR * -1
// return total

// mascara numero

// function verificatecla(e) {
//    e.preventDefault()
//      console.log(e)
//      inputValor = document.querySelector('input[name="mercadoira"]')
//      if ("1234567890".indexOf(e.key) != -1 ) {
//  inputValor.value += e.key
//}
// 

//inputValor.balue = (inputValor.value(.replaceAll('.', "").replaceAll(',', ".")).toLocaleString('pt-BR')
//}

// preencher tabela

// document.querySelector('input[type="submit"]').value = 'texto'
// input[type="submit"] ------> tag do html a ser subtituida ou incrementada