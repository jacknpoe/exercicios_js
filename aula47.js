const oArray = window.document.querySelector("#array")
const txtPesquisar = window.document.querySelector("#txtPesquisar")
const btnPesquisar = window.document.querySelector("#btnPesquisar")
const resultado = window.document.querySelector("#resultado")

const elementos = [10, 46, 8, 9, 2, 11, 5, 20]
oArray.innerHTML = `[${elementos}]`

btnPesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML= "Valor não encontrado!"
    const retorno = elementos.find((e, i) => {
        if(e == txtPesquisar.value){
            resultado.innerHTML= `Valor pesquisado ${e} encontrado na posição ${i}!`
            return e
        }
    })
})