"use strict";

function calculator() {
  let operator = prompt(
    "elija entre sumar, restar, multiplicar, dividir o potencia"
  );
  let num1 = 0;
  if (
    operator === "sumar" ||
    operator === "restar" ||
    operator === "dividir" ||
    operator === "multiplicar" ||
    operator === "potencia"
  ) {
    let n1 = +prompt("ingrese el primer número");
    let n2 = +prompt("ingrese el segundo número");
    switch (operator) {
      case "sumar":
        num1 = n1 + n2;
        break;
      case "restar":
        num1 = n1 - n2;
        break;
      case "dividir":
        if (n2 === 0) {
          return alert("no se puede dividir por 0");
        } else {
          num1 = n1 / n2;
        }
        break;
      case "multiplicar":
        num1 = n1 * n2;
        break;
      case "potencia":
        num1 = Math.pow(n1, n2);
        break;
    }
  } else {
    alert("ERROR, INGRESE UNA OPERACIÓN VÁLIDA");
  }
  return num1;
}

const valor = calculator();
console.log(valor);
