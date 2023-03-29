const button= document.querySelector("#button")
const textarea=document.querySelector("#textarea")
button.addEventListener("click", contar)
function contar(){
    let texto=textarea.value
    alert("la cantidad de caracteres es " + texto.length)
}
