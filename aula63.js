const fNome = window.document.getElementById("fNome")
const fPortas = window.document.getElementById("fPortas")
const fBlindagem = window.document.getElementById("fBlindagem")
const fMunicao = window.document.getElementById("fMunicao")
const fTipoMilitar = window.document.getElementById("fTipoMilitar")
const fTipoNormal = window.document.getElementById("fTipoNormal")
const carros = window.document.getElementById("carros")
const btnAddCarro = window.document.getElementById("btnAddCarro")

let arrayCarros = []

fTipoMilitar.addEventListener("click", (evt) => {
    fBlindagem.removeAttribute("disabled")
    fMunicao.removeAttribute("disabled")
})

fTipoNormal.addEventListener("click", (evt) => {
    fBlindagem.value = 0
    fMunicao.value = 0
    fBlindagem.setAttribute("disabled", "disabled")
    fMunicao.setAttribute("disabled", "disabled")
})

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ""
    arrayCarros.forEach((carro) => {
        const div = window.document.createElement("div")
        div.setAttribute("class", "carro")
        div.innerHTML = `Nome: ${carro.nome}<br/>Portas: ${carro.portas}<br/>Cor: ${carro.cor}<br/>Blindagem: ${carro.blindagem}<br/>Munição: ${carro.municao}`
        carros.appendChild(div)
    })
}

btnAddCarro.addEventListener("click", (evt) => {
    if(fTipoNormal.checked){
        const carro = new Carro(fNome.value, Number(fPortas.value))
        arrayCarros.push(carro)
    } else {
        const militar = new Militar(fNome.value, Number(fPortas.value), Number(fBlindagem.value), Number(fMunicao.value))
        arrayCarros.push(militar)
    }
    fNome.value = ""
    fPortas.value = 0
    fBlindagem.value = 0
    fMunicao.value = 0
    gerenciarExibicaoCarros()
})

// const publica = (...el) => {        // aceita mais parâmetros a partir da aula 57
//     for(i of el){
//         let p = window.document.createElement("div")
//         p.innerHTML = i
//         p.setAttribute("class", "carros")       // adicionado na aula 59
//         carros.appendChild(p)
//     }
// }

class Carro{    // Classe PAI
    constructor(nome, portas = 2){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.velocidade = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{    // Classe FILHA
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("verde")
    }
    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

// class Utilitario extends Carro{     // Classe FILHA
//     constructor(nome, portas, lugares){
//         super(nome, portas)
//         this.lugares = lugares
//     }
// }
