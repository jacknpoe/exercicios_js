const caixaCursos = window.document.getElementById("caixaCursos")
const cursos = ["HTML", "CSS", "PHP", "JavaScript", "SQL", "React", "ReactNative"];
const btnCursoSelecionado = window.document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = window.document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = window.document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = window.document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = window.document.getElementById("nomeCurso")

let indice = 0
const criarNovoCurso = (curso) => {
    let novoElemento = window.document.createElement("div")
    novoElemento.innerHTML = curso
    novoElemento.setAttribute("id", "c" + (indice+1))
    novoElemento.setAttribute("class", "curso c1")

    const comandos = window.document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = window.document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")
    
    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    return novoElemento
}

for(let i of cursos){
    caixaCursos.appendChild(criarNovoCurso(i))
    indice++
}

const radioSelecionado = () => {
    const radios = [...window.document.querySelectorAll("input[type=radio]")]
    const selecionado = radios.filter((elemento) => { return elemento.checked })
    return  selecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    const selecionado = radioSelecionado()
    try{
        const cursoSelecionado = selecionado.parentNode.previousSibling.textContent
        alert(`Curso selecionado: ${cursoSelecionado}!`)
    } catch(ex){
        alert("Selecione um curso.")
    }
})

btnRemoverCurso.addEventListener("click", (evt) => {
    const selecionado = radioSelecionado()
    if(selecionado != undefined){
        const cursoSelecionado = selecionado.parentNode.parentNode
        cursoSelecionado.remove()
    } else{
        alert("Selecione um curso.")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
    const selecionado = radioSelecionado()
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = selecionado.parentNode.parentNode
            caixaCursos.insertBefore(criarNovoCurso(nomeCurso.value), cursoSelecionado)
        } else{
            alert("Digite o nome do curso.")
        }
    } catch(ex){
        alert("Selecione um curso.")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    const selecionado = radioSelecionado()
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = selecionado.parentNode.parentNode
            caixaCursos.insertBefore(criarNovoCurso(nomeCurso.value), cursoSelecionado.nextSibling)
        } else{
            alert("Digite o nome do curso.")
        }
    } catch(ex){
        alert("Selecione um curso.")
    }
})
