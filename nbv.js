//se busca crear un metodo para calcular nitrogenos ingresando
//el volumen de acido sulfurico gastado para cada uno, que luego
//se los separara en distintas calidades

function determinarCalidad(valorNitrogeno) {
  if (valorNitrogeno >= 0) {
    console.log(
      "La nitrogeno basico volatil de la harina es: " + valorNitrogeno
    );
    if (valorNitrogeno < 130) {
      console.log("El NBV es bajo");
    } else if (valorNitrogeno < 150) {
      console.log("El NBV es intermedio");
    } else if (valorNitrogeno < 200) {
      console.log("El NBV es alto I");
    } else if (valorNitrogeno < 300) {
      console.log("El NBV es alto II");
    } else if (valorNitrogeno >= 300) {
      console.log("El NBV es alto III");
    } else {
      console.log("No has ingresado ningun valor");
    }
  }
}

function calidad(calidadNiterogeno) {
  if (calidadNiterogeno < 130) {
    console.log("Llevando la planchada a la pila 1");
  } else if (calidadNiterogeno < 150) {
    console.log("Llevando la planchada a la pila 2");
  } else if (calidadNiterogeno < 200) {
    console.log("Llevando la planchada a la pila 3");
  } else if (calidadNiterogeno < 300) {
    console.log("Llevando la planchada a la pila 4");
  } else if (calidadNiterogeno >= 300) {
    console.log("Llevando la planchada a la pila 5");
  } else {
    console.log("El valor de NBV es inválido.");
  }
}

function cuenta(masa, volumen) {
  let resultado = ((volumen * 140) / masa) * 0.85;
  return resultado;
}

let masaHarina = prompt("Ingrese la masa de harina utilizada");
let volumenGastado = prompt(
  "Ingrese el volumen de acido sulfirico gastado en la titulacion"
);

let nbv = cuenta(masaHarina, volumenGastado);

alert("El nbv de la muestra analizada es " + nbv);

determinarCalidad(nbv);

calidad(nbv);
