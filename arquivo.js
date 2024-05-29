console.log("Jonathan Nasser")

const n = 32 / 2
const soma = 2 + 2

console.log(n)

console.log(soma)

console.log(`a existência do hb2 é 
verdadeira` )


const jonathan = {
    nome: "Jonathan",
    idade: 42,
    endereco: {
        logradouro: "João Alves de Melo",
        numero: 81,
        cidade: "Natal",
        estado: "RN",
        pais: "Brasil"
    }
}

console.log(jonathan)

console.log(jonathan.endereco)

console.log(jonathan.endereco.logradouro)

//alterando valor

const usuario = { //o const poderá ser usado, pois será alterado só item do objeto. Caso o contrário seria LET
    nome: "Jonathan",
    idade: 42,
    endereco: {
        logradouro: "João Alves de Melo",
        numero: 81,
        cidade: "Natal",
        estado: "RN",
        pais: "Brasil"
    }
}

usuario.endereco.numero = "81a"

console.log(usuario)