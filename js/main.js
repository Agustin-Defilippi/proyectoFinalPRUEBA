const formularioDestino = document.getElementById("fomularioDestino");
const busquedaViaje = document.getElementById("busquedaViaje");
const select =  document.getElementById("destinoFiltrado");

const obtenerDatosViaje = async () =>{
    try {
        const datosRespuesta = await fetch("js/baseDeDatos.json");
        const datosViaje = await datosRespuesta.json();
        renderProductosOfertas(datosViaje);
        busquedaViaje.addEventListener("change", () => {
            let busquedaInput = busquedaViaje.value;
            filtradoPorZona(datosViaje,busquedaInput);
        });

        formularioDestino.addEventListener("submit",(e) =>{
            e.preventDefault();
            let validacionFormulario =  validarFormulario();
            if(validacionFormulario == true){      
        
                let opcionesLugares = busquedaSelect(datosViaje,select);
                localStorage.setItem("paqueteViajeBusqueda", JSON.stringify(opcionesLugares));
                setTimeout(() => location.href = "pages/paqueteViaje.html", 1500);
            }else{
                return false;
            }
        });

    } catch (error) {
        document.getElementById("productos").innerHTML = `<div class="cont-spinner">
            <div class="spinner">
                <strong>Error, Cargando Productos...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true">
                </div>
            </div>
        </div>`
    }
}

obtenerDatosViaje();