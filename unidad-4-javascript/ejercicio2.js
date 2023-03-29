let numeros = [30,20,50];
let numeroMayor = null;
for (let i=0; i<numeros.length; i++) {

    if (numeroMayor == null) {
        numeroMayor = numeros[i];
    }

    if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
    }
}

alert (numeroMayor);
