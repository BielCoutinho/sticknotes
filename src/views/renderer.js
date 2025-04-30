/**
 * Processo de renderização do documento index.html
 */

console.log("Processo de Renderização")
//   estratégia para renderizar(desenhar) as notas adesivas
// usar uma lista para preencher de forma dinamica os itens(notas)

// vetor global para manipular os dados do banco
let arrayNotes = []

// captura do id da list <ul> do documento index.html
const list = document.getElementById('listNotes')

// inserção da data no rodapé
function getDate() {
    const date = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return date.toLocaleDateString('pt-BR', options)
}

document.getElementById('currentDate').innerHTML = getDate()


//troca do icone do bancao de dados (status de conexão)
//uso da api do preload.js
api.dbStatus((event, message) => {
    //teste de recebimento da mensagem
    console.log(message)

    if (message === "conectado") {
        document.getElementById('iconDB').src = "../public/img/dbon.png"

    } else {
        document.getElementById('iconDB').src = "../public/img/dboff.png"
    }

})

// Enviar ao main um pedido para conectar com o banco de dados quando a janela principal for inicializada 
api.dbConnect()

// =================================================================================
// === Crud Read ===================================================================

// Passo 1: Enviar ao main um pedido para listar as notas

api.listNotes()

// Passo 5: Recebimento das notas via IPC e renderização(desenho) das notas no documento index.html
api.renderNotes((event, notes) => {
    const renderNotes = JSON.parse(notes)
    console.log(renderNotes) // teste do passo 5
    //renderizar no index.html o conteúdo do array
    arrayNotes = renderNotes //atribuir ao vetor o JSON recebido
    //uso do laço forEath para percorrer o vetor e extrair os dados
    arrayNotes.forEach((n) => {
        //Adição de tags <li> no documento index.html
        // ar(--${n.cor}) aplica a cor definida nas variáveis CSS. Atenção!! É necessário usar o mesmo nome armazenado no banco e nas variaveis CSS
        list.innerHTML += `
        
        <li class="card" style="background-color: var(--${n.cor});">
            <p onclick="deleteNote('${n._id}')" id="x">X</p>
            <p id="code">${n._id}</p>
            <p>${n.texto}</p>
            <p id="color">${n.cor}</p>
        </li>    
     `
    })

})

// =================================================================================
// === Fim -Crud Read ==============================================================

// =================================================================================
// === Atualização das Notas =======================================================

api.mainReload((args) => {
    location.reload()
})

// =================================================================================
// === Fim - Atualização das notas =================================================


// =================================================================================
// === Crud Delete =================================================================

function deleteNote(id) {
    console.log(id) // 1 Passo: receber o id da nota exluida
    api.deleteNote(id)
}

// =================================================================================
// === Fim - CRUD Delete ===========================================================