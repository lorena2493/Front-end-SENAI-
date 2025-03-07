// alert("Olá mundo")
//
// var test = prompt("Digite algo")
//
// alert(test)

function testTexto() {
    document.getElementById("titulo").innerHTML += " Boa tarde "
}

function reset() {
    const titulo = document.getElementById("titulo")

    titulo.innerHTML = " Bem-vindo ao nosso site "
    titulo.style.color = "red"
    titulo.style.fontSize = "48px"
}

function testColor() {
    document.getElementById("titulo").style.color = "red"
}

function testInput() {
    document.getElementById("input").value = "tarde"
}

function limpa_form() {
    var warning = 'Tem certeza que você quer limpar o formulário?';
    if (confirm(warning)) {
        document.getElementById("nome").value = ""
        document.getElementById("username").value = ""
        document.getElementById("cidade").value = ""
        document.getElementById("estado").value = ""
        document.getElementById("cep").value = ""
        document.getElementById("senha").value = ""
        document.getElementById("descricao").value = ""
    } else {

    }
}

function trocaCor_btn_limpar() {
    const btn_limpar = document.getElementById("btn-limpar")
    btn_limpar.style.color = "blue"
}

function trocaCor_nome() {
    const nome = document.getElementById("label_nome")
    nome.style.color = "blue"
}

function trocaCor_username() {
    const username = document.getElementById("label_username")
    username.style.color = "blue"
}

function trocaCor_cidade() {
    const cidade = document.getElementById("label_cidade")
    cidade.style.color = "blue"
}

function trocaCor_estado() {
    const estado = document.getElementById("label_estado")
    estado.style.color = "blue"
}

function trocaCor_senha() {
    const senha = document.getElementById("label_senha")
    senha.style.color = "blue"
}

function trocaCor_descricao() {
    const descricao = document.getElementById("label_descricao")
    descricao.style.color = "blue"
}


function preencheInput_nome() {
    const nome = document.getElementById("nome")
    nome.value = "Nome"
}

function preencheInput_username() {
    const nome = document.getElementById("username")
    nome.value = "Nome de usuário"
}

function preencheInput_cidade() {
    const nome = document.getElementById("cidade")
    nome.value = "Cidade"
}


function preencheInput_senha() {
    const nome = document.getElementById("senha")
    nome.value = "Senha"
}

function preencheInput_descricao() {
    const nome = document.getElementById("descricao")
    nome.value = "Descrição"
}

