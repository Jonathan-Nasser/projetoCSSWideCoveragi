const input = document.getElementById("main-input")

const elemento = document.getElementsByClassName("paragrafo-js")

const tags = document.getElementsByTagName("p")

const elementonome = document.getElementsByName("nome-completo")

const seletorClasse = document.querySelector(".paragrafo-js") //procura por uma classe 
const seletorID = document.querySelector("#main-input") //procura por um ID
const maisdeum = document.querySelector("button.main-button") // caso existissem mais de uma classe main-button, ele retornaria a do button

const traztudo = document.querySelectorAll("p")


console.log(input)

console.log(elemento)

console.log(tags)

console.log(elementonome)

console.log(seletorClasse)
console.log(seletorID)
console.log(maisdeum)

// console.log(traztudo)

// //alterando textos e html

 const element = document.querySelector(".paragrafo-js")

//  element.innerHTML = "<b>Java</b>Script" 

 console.log(element.textContent)
 console.log(element.innerText)
 console.log(element.innerHTML)

// Alterando CSS(estilos) no JavaScript

const button = document.querySelector(".main-button")

button.style.color = "white"



const texto = document.querySelector("p")

texto.style.fontSize = "2.5rem"

button.style.backgroundColor = "red"
button.style.fontSize = "22px"

