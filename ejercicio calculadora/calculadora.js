// const spanNumeroIngresado = document.querySelector(".dato-ingresado");
// console.log(spanNumeroIngresado);

// //Permite obtener todos los botones (etiquetas button) dentro del documento
// const listaBotones = document.querySelectorAll("button");
// console.log(listaBotones);

// //Permite capturar el primer elemento html con la clase btn-container
// const divListBtn = document.querySelector(".btn-container");
// console.log(divListBtn);
// //Capturamos todos los elementos hijos del primer elemento html con la clase btn-container
// const listBtn = divListBtn.children;
// console.log(listBtn);

// //Permite calcular todos los botones (etiqueta button) que se encuentran dentro del primer elemento html con la clase btn-container
// const btnDiv = document.querySelectorAll(".btn-container button");
// console.log(btnDiv);

// const btnMultiplicacion = document.getElementById("multiplicacion");
// console.log(btnMultiplicacion);

const numeroIngresadoString = prompt("ingrese un número");
const numeroIngresado = Number(numeroIngresadoString);

//declarar una función que realice las operaciones ariméticas correspondientes

const operacionesAritmeticas = (numeroIngresado, numeroSpan, operacion) => {
  switch (operacion) {
    case "suma":
      return numeroIngresado + numeroSpan;
    case "resta":
      return numeroIngresado - numeroSpan;
    case "multiplicacion":
      return numeroIngresado * numeroSpan;
    case "division":
      return numeroIngresado / numeroSpan;
    default:
      return "Operación incorrecta";
  }
};
const spanNumeroIngresado = document.querySelector(".dato-ingresado");

spanNumeroIngresado.innerText = numeroIngresadoString;

//capturar el número que se encuentra quemado en el span y lo convertimos en número
const numeroQuemado = Number(document.querySelector(".dato-quemado").innerText);

//capturar los botones dentro del contenedor de btn

const listaBotones = document.querySelectorAll(".btn-container button");

listaBotones.forEach((boton) => {
  boton.addEventListener("click", () => {
    // console.log("hice click", boton.id);
    const resultado = operacionesAritmeticas(numeroIngresado, numeroQuemado,boton.id);
    console.log(resultado);
    const spanresultado = document.querySelector(".resultado");
    spanresultado.innerText = resultado;
  }); //addEventListener permite agregar eventos y recibe dos PARAMETROS 1.String del evento y 2.parametro una función callbag que se ejecuta cuando suceda ese evento sobre ese elemnto
});
