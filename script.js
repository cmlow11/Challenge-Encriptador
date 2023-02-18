const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
let textoEncriptado = "";
function entradavalida(entrada){
    const expresiones = /^[a-z]*$/;
    return expresiones.test(entrada)
}


function btnEncriptar(){
    if(!entradavalida(textArea.value)){
        alert("El texto debe contener solo letras minúsculas y sin acentos");
        return;
    }
    textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none" 
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar(stringEncriptada){
    let raiz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i =0; i < raiz.length; i++){
        if (stringEncriptada.includes(raiz[i][0])){
            stringEncriptada = stringEncriptada.replace(raiz[i][0], raiz[i][1])
        }
    }
    return stringEncriptada 

    
}



function btnDesencriptar() {
    if(textoEncriptado === ""){
        alert("!Error¡ No hay texto para desencriptar")
        return;
    }
    mensaje.value = desencriptar(textoEncriptado)
    textArea.value = "";
    
}

function desencriptar(stringDesencriptada) {
    let raiz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < raiz.length; i++) {
        if (stringDesencriptada.includes(raiz[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(raiz[i][1], raiz[i][0])
        }
    }
    return stringDesencriptada

}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}









