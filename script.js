const input = document.getElementById("input");
const tabla = document.getElementById("tabla");
const boton = document.getElementById("boton");


function agregarTarea(){
    const fila = document.createElement("tr");

    fila.innerHTML = `
            <td> <input type="checkbox" onClick="completar()" /> </td>
            <td style="flex-grow:2">${input.value}</td>
            <td> <span class="borrar" onClick="borrar()"> X </span> </td>
        `;
     
        tabla.appendChild(fila);
        input.value = "";
}


function borrar(event){
  this.event.target.parentElement.parentElement.remove();
  validacion("Tarea eliminada", "exito");
}


function completar(event){
    if(this.event.target.checked){
        this.event.target.parentElement.parentElement.classList.add("completado");
        const tareasCompletadas = document.querySelectorAll(".completado").length;
        validacion("Enhorabuena!", "exito");
    } else {
        this.event.target.parentElement.parentElement.classList.remove("completado");
    
    }
}


boton.addEventListener('click', function(e){
    if(input.value === ""){
        validacion("Introduce una tarea", "fallo");
    } else {
       agregarTarea();
       validacion("Tarea añadida con éxito", "exito");
    }
})


function validacion(mensaje, clase){
    const div = document.createElement('div');
    div.className = clase;
    div.appendChild(document.createTextNode(mensaje));
    const titulo = document.querySelector('.titulo');

    titulo.insertBefore(div, null);

    //Timeout after 3 seconds
    setTimeout(function(){
        document.querySelector(`.${clase}`).remove();
    }, 3000);
}