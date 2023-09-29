const caixaCursos = window.document.getElementById("caixaCursos")
const cursos = ["HTML", "CSS", "PHP", "JavaScript", "SQL", "React", "ReactNative"];
const btnCursoSelecionado = window.document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = window.document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = window.document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = window.document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = window.document.getElementById("nomeCurso")

let indice = 0

const tirarSelecao = () => {
        const selecionados = [...window.document.querySelectorAll(".selecionado")]
        selecionados.map((el) => {
            el.classList.remove("selecionado")
        })
 }

const criarNovoCurso = (curso) => {
    let novoElemento = window.document.createElement("div")
    novoElemento.innerHTML = curso
    novoElemento.setAttribute("id", "c" + (indice+1))
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.addEventListener("click", (evt) => {
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}

for(let i of cursos){
    caixaCursos.appendChild(criarNovoCurso(i))
    indice++
}

const cursoSelecionado = () => {
    const cursos = [...window.document.querySelectorAll(".selecionado")]
    return cursos[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    try{
        alert(`Curso selecionado: ${cursoSelecionado().innerHTML}!`)
    } catch(ex){
        alert("Selecione um curso.")
    }
})

btnRemoverCurso.addEventListener("click", (evt) => {
    selecionado = cursoSelecionado()
    if(selecionado != undefined){
        selecionado.remove()
    } else{
        alert("Selecione um curso.")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
    try{
        if(nomeCurso.value != ""){
            curso = cursoSelecionado()
            if((typeof curso) == "undefined"){
                alert("Selecione um curso.")
            } else {
                caixaCursos.insertBefore(criarNovoCurso(nomeCurso.value), curso)
            }
        } else{
            alert("Digite o nome do curso.")
        }
    } catch(ex){
        alert("Selecione um curso.")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    try{
        if(nomeCurso.value != ""){
            caixaCursos.insertBefore(criarNovoCurso(nomeCurso.value), cursoSelecionado().nextSibling)
        } else{
            alert("Digite o nome do curso.")
        }
    } catch(ex){
        alert("Selecione um curso.")
    }
})
