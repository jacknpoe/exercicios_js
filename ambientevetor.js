let num = [5, 8, 2, 9, 3]
num[5] = 6
num.sort()
num.push(7)
console.log(`O vetor ${num} tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
i6 = num.indexOf(6)
console.log(`O valor 6 está no indice ${i6}.`)
i4 = num.indexOf(4)
if(i4 == -1){
    console.log("O valor 4 não foi encontrado!")
} else{
    console.log(`O valor 4 está no indice ${i4}.`)
}