const p = document.querySelector("#numero")
let contador = 0
p.innerHTML = contador

const restar = () =>{
    contador--
    p.innerHTML = contador
}

const sumar = () =>{
    contador++
    p.innerHTML = contador

}

