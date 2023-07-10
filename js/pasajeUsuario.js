const destinoPasajero = JSON.parse(localStorage.getItem("paqueteViajeBusqueda")) || [];
const datosPasajero = JSON.parse(localStorage.getItem("datosUsuario")) || [];

const compraRealizada= document.getElementById("compraRealizada");
compraRealizada.innerHTML=`<b>${datosPasajero.apellidoPasajero} ${datosPasajero.nombrePasajero}</b>, su pasaporte se ha generado con exito!`;

const renderPasaje = () =>{
    const destino = destinoPasajero;
    const datosPersonales = datosPasajero;
    let boletoUsuario = renderPasajeUsuario(datosPersonales,destino)    
    document.getElementById("pasaporte").innerHTML = boletoUsuario;
}

renderPasaje();

const btnDescargar = document.getElementById("btn-Descargar");
btnDescargar.addEventListener("click", () =>{
    Toastify({

        text: "Pasaje Descargado",
        duration: 4000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            color:"white",
        },
    }).showToast();
})