const datosRespuesta ="";

const obtenerDatosExcursiones = () =>{
   
    fetch("../js/datosTienda.json")
    .then(respuesta => respuesta.json())
    .then(datosRespuesta => 
        renderTiendaExcursiones(datosRespuesta),
    )
    
}
obtenerDatosExcursiones();
let carrito = JSON.parse(localStorage.getItem("prodCarrito")) || [];

btnSvgCarrito() 