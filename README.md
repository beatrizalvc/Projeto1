## Desafio de HTML, CSS e JS da NewTab Academy.

# Sobre o projeto
Seu objetivo é criar uma SPA (Single Page Application) seguindo o layout que está nesta url: https://goo.gl/yMrCaf.

No layout original vocês vão ver que existem itens no menu sem utilidade. Vamos alterar e criar funcionalidades pra eles? 🙂

# Durante o desenvolvimento portanto, vocês devem:

Alterar o link “Resumo” para “Cadastro de transações”.
Alterar o link “Dashboard” para “Limpar dados”.
Alterar o link “Configurações” para “Salvar no servidor”.
O que sua aplicação deverá fazer
Incluir transações de compra ou venda de mercadoria.
Criar um extrato das transações incluídas. As transações deverão ser mostradas na ordem em que foram incluídas.
Mostrar o saldo final e destacar se houve lucro ou prejuízo.
A aplicação deverá ser responsiva e estar de acordo com o layout fornecido.
Persistir as transações no Local Storage.
Ter a opção de salvar os dados em um servidor.

# Outros requisitos
# HTML:

As opções do campo “Tipo de transação” são: Compra e Venda.
Caso não exista nenhuma transação cadastrada, adicione a mensagem “Nenhuma transação cadastrada.” na lista do Extrato.

# CSS:

Testar em smartphones, tablets (modos portrait e landscape) e monitores a partir de 1024px até 1900px. (Através do inspecionar elemento no navegador)
A fonte utilizada é a Lato.
A largura máxima do conteúdo é 1100px.

# Javascript:

Validar o formulário para que todos os campos sejam preenchidos.
Adicionar uma máscara no campo “Valor” para que apenas números sejam preenchidos e com a formatação correta. (Padrão: 10,90)
Ao adicionar uma nova transação, persistir no Local Storage e já atualizar a lista com o extrato. Atualizar também o cálculo apresentado.
Ao clicar no link “Limpar dados”, apresentar uma mensagem de confirmação e em seguida apagar as informações, atualizando a lista.
Ao clicar no link “Salvar no servidor”, você deve realizar uma chamada para a API do Airtable:
API Key: key2CwkHb0CKumjuM
Documentação: https://airtable.com/appRNtYLglpPhv2QD/api/docs#curl/table:historico:list
Usuário: contato@newtab.academy
Senha: qy9hfCHacwfH6PB
Valores:
Aluno: os 4 últimos números do seu CPF.
Json: Json com todas as transações armazenadas no Local Storage.
Métodos: primeiramente listar os registros para buscar o “id” referente ao seu registro. Em seguida, realizar o update do valor do “Json”.
Para visualizar os registros e verificar se deu certo a atualização, acesse: https://airtable.com/shrgRkjwA8uitAY3s
