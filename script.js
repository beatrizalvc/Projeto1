let lista = [];

// Função que valida o formulário (onsubmit no <form>)
function validarForm(e) {
    e.preventDefault; //evita atualização da página

    let transacao = document.getElementById('transacao').value; //resgata o value do input
    let mercadoria = document.getElementById('mercadoria').value;
    let valor = document.getElementById('valor').value;
    
    let error = false; //booleano para validação dos campos
    
    let erroTransacao = document.getElementById('erroTransacao'); //resgata div em que aparece a msg do erro
    erroTransacao.innerHTML = ""; //deixa a div sem conteúdo
    let erroMercadoria = document.getElementById('erroMercadoria');
    erroMercadoria.innerHTML = "";
    let erroValor = document.getElementById('erroValor');
    erroValor.innerHTML = "";
    
    if (transacao == ""){ //se o input não for preenchido/selecionado
        error = true; //há erro
        erroTransacao.innerHTML = 'Selecione "Compra" ou "Venda"' //add aviso à div de erro
    }
    
    if (mercadoria == ""){
        error = true;
        erroMercadoria.innerHTML = 'Preencha o nome da mercadoria'
    }
    
    if (valor == ""){
        error = true;
        erroValor.innerHTML = 'Preencha o valor'
    }

    if(!error){ //não existe erro
        if(lista == null){ //caso a lista estiver null, criar um array vazio
            lista = [];
        }

        if(transacao == "-"){ //se a transação for do tipo "compra", fazer valor ficar negativo p/ subtrair do total
            valor = valor * -1;
        }else{ //caso seja positivo, passar de string p/ number
            valor = parseFloat(valor);
        }
        }

        lista.push({transacao: transacao, mercadoria: mercadoria, valor: valor}) //add os valores inseridos para a lista
        localStorage.setItem('lista', JSON.stringify(lista)); //add a lista no localStorage
        listaDados(); //chamada p/ função que add a lista na tabela de extratos
    
    }

//Função que adiciona os dados da lista na tablea de extratos
function listaDados(){
    lista = JSON.parse(localStorage.getItem('lista')); //recupera os dados json

    let tbody = document.getElementById('tbody'); //setando qual elemento do hmtl a lista será inserida
    tbody.innerHTML = ""; // certificando conteúdo vazio

    var total = 0;
    for (let idx_aln in lista) { 
        total += parseFloat(lista[idx_aln].valor); // faz o cálculo do total (certificando que o número não é uma string)
        tbody.innerHTML += //adiciona sempre uma <tr> nova
        `<tr class="tr-border">
            <td> ` + lista[idx_aln].transacao + ` </td>
            <td> ` + lista[idx_aln].mercadoria + ` </td>
            <td class="tr-right"> ` + lista[idx_aln].valor + ` </td>
        </tr>
        `
    }
    //console.log("TOTAL ", total);
    let tdTotal = document.getElementById('tdTotal');
    tdTotal.innerHTML = `<strong>R$ ` + total +`</strong>`;

    let textoTotal = document.getElementById('textoTotal');
    textoTotal.innerHTML = "";

    // Condição para mostrar mensagem de acordo com o total
    if (total < 0){
        textoTotal.innerHTML = "[PREJUÍZO]"
    }else{
        textoTotal.innerHTML = "[LUCRO]"
    }
    
    }


// Mascara dos números
function mascaraNumero(e) {
    e.preventDefault() // Evita que a qualquer tecla seja digitada
    console.log(e)
    if ("1234567890".indexOf(e.key) != -1) { // Adiciona exceção dos números
        document.querySelector('input[name=valor]').value += e.key; // Insere os números no campo
    } 
}


//Função que deleta todas as transações do localStorage
function deletarTransacoes() {
    localStorage.removeItem('lista') //Deleta o objeto 
    alert("Registros Excluídos!")
}
