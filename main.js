const anio = document.querySelector(".fechaHoy")
anio.textContent = new Date().getFullYear()

/* let date = new Date().getHours()
const h1 = document.querySelector("h1")

if (date<12) {
    h1.textContent = "buenos dias"
}
else if (date<19) {
    h1.textContent = "buenas tardes"
}
else {
    h1.textContent = "buenas noches"
} */


/* const etiqueta = document.querySelector("#cumple")
etiqueta.style.backgroundColor = "blue" */

const boton = document.querySelector(".botonTema")
boton.addEventListener("click" , () => {
    /* accede desde el documento al cuerpo del html (body), se fija todas las clases que tiene (classList),
    toggle -> interruptor de luz */
    document.body.classList.toggle("oscuro")
    document.body.classList.toggle("claro")
})


// para el formulario
const formulario = document.querySelector(".formulario") //agarra todo el html del formulario
const error = document.querySelector(".mensaje-error")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    // prevenir la accion por default: que se recarga la pagina

    const nombre = document.querySelector("#nombre").value //agarra solo el valor de nombre
    const correo = document.querySelector("#correo").value
    const mensaje = document.querySelector("#mensaje").value

    if (nombre === "" || correo === "" || mensaje === "") {
        error.textContent = "Faltan campos por completar"
        return
    }

    if (nombre.length < 3 || mensaje.length < 3) {
        error.textContent = "El texto es demasiado corto"
        return
    }

    if (!correo.includes("@")) {
        error.textContent = "El correo no es válido"
        return
    }

    error.textContent = "¡Mensaje enviado!"
    formulario.reset()
    // recargas el formulario

    console.log(nombre)
    console.log(correo)
    console.log(mensaje)
})
