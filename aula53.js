const btnSoma = window.document.getElementById("btnSoma")
const btnSubracao = window.document.getElementById("btnSubracao")
const btnMultiplicacao = window.document.getElementById("btnMultiplicacao")
const btnDivisao = window.document.getElementById("btnDivisao")
const valor1 = window.document.getElementById("valor1")
const valor2 = window.document.getElementById("valor2")
const resultado = window.document.getElementById("resultado")

const operacoes = [
    () => {
        resultado.value = Number(valor1.value) + Number(valor2.value)
    },
    () => {
        resultado.value = Number(valor1.value) - Number(valor2.value)
    },
    () => {
        resultado.value = Number(valor1.value) * Number(valor2.value)
    },
    () => {
        resultado.value = Number(valor1.value) / Number(valor2.value)
    }
]

btnSoma.addEventListener("click", operacoes[0])
btnSubracao.addEventListener("click", operacoes[1])
btnMultiplicacao.addEventListener("click", operacoes[2])
btnDivisao.addEventListener("click", operacoes[3])

// const caixa = window.document.getElementById("caixa")

// let valores = [1, 2, 3, 4, 5]

// publica = (el) => {
//     let p = window.document.createElement("p")
//     p.innerHTML = el
//     caixa.appendChild(p)
// }

// const operacoes = [
//     (valor) => {
//         let soma = 0
//         for(let v of valor) soma += v
//         return soma
//     },
//     (valor) => {
//         let produto = 1
//         for(let v of valor) produto *= v
//         return produto
//     },
//     (valor) => {
//         for(let v of valor) publica(v)
//     }
// ]

// publica(operacoes[0](valores))
// publica(operacoes[1](valores))
// operacoes[2](valores)

// let cores = ["azul", "amarelo", "verde", "vermelho", "preto", "branco", "cinza", "rosa", ["claro", "escuro", "médio"]]
// let cursos = ["HTML", "CSS", "JavaScript", "PHP", "SQL", "React", "C++", "Python", cores]
// cursos.push("VFP")
// cursos.unshift("C#")

// alert( cursos[9][8][1])

// cursos.map((el) => {
//     let p = window.document.createElement("p")
//     p.innerHTML = el
//     caixa.appendChild(p)
// })

// for(let i of cursos) console.log(i)