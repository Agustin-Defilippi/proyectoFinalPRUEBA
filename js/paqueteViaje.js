const viajeBusqueda =  JSON.parse(localStorage.getItem("paqueteViajeBusqueda")) || [];

const viajeFiltrado = () =>{
    const viajeFiltrado = viajeBusqueda;
    let cardViajeFiltrado =
    `<div class="d-flex justify-content-center align-items-center my-5 bg-paqueteFiltrado">
            <div class="card  css-pFiltrado text-ligth border-dark " style="width: 18rem;">
                <img src="${viajeFiltrado.imagen}" class="card-img-top" alt="${viajeFiltrado.destino}">
                <div class="card-body">
                    <h4>${viajeFiltrado.nombre} 2023 te está esperando!<br></h4>
                    <p class="card-text">
                    Con Defilippi Tourlines esto es posible, aprovecha con nosotros la posibilidad de poder hacer tu  sueño realidad.<br><br>
                    <b>Precio</b>: $${viajeFiltrado.precio}
                    </p>
                </div>
                <div class= "d-flex justify-content-center mb-2">
                <button id="btn-conoceMas" class="btn bg-btn border-dark  text-light">Más Información</button>
                </div>
            </div>
      </div>`;
    
    document.getElementById("paqueteViajeFiltrado").innerHTML=cardViajeFiltrado;
    return viajeFiltrado;
}

const viaje = viajeFiltrado();

const btnConoceMas = document.getElementById("btn-conoceMas");

btnConoceMas.addEventListener("click",() =>{
    let containerInfoAdicional = document.getElementById("informacionAdicional");
    let containerClima = document.getElementById("infoClima");
    const  infoDestino = viaje;
    let informacion = infoConocerMas(infoDestino);
    containerInfoAdicional.innerHTML = informacion;
    obtenerDatosApi(viaje.destino)
    .then(climaHTML =>{
        containerClima.innerHTML= `<div class="cont-spinner">
                    <div class="spinner">
                        <strong>Cargando datos del Clima...</strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true">
                        </div>
                    </div>
                </div>`

        setTimeout(() =>{
            containerClima.innerHTML = climaHTML;
        },3000);
    });
});

informacionAdicional.addEventListener("click", (e) => {
    JSON.parse(localStorage.getItem("paqueteViajeBusqueda")) || [];
    (e.target.id === "btn-contratar") && setTimeout(() => location.href = "contratarViaje.html", 1500);
});

const obtenerDatosApi = (ciudad) =>{
    let apiKey = "eda6c39ba9765814f39e9badb0dc9aed";
    const api =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},Argentina&appid=${apiKey}`;

    return fetch(api)
        .then(respuesta => respuesta.json())
        .then(data =>{
            console.log(data);
            return `
            <div id="climaCiudad" class="climaCiudad">
                <div class="card text-center card-clima  bg-dark" style="width: 18rem;">
                    <img src="${viaje.imagen3}" class="card-img-top" alt="${data.name}">
                    <div class="card-body">
                        <div class="bg-dark border border-light mb-3">
                            <h5 class="card-title fs-4 text-light">Condiciones climaticas actuales de (${data.name})</h5>
                        </div>
                        <div class="border border-light">
                            <p class="card-text text-light">TEMPERATURA: ${Math.round(data.main.temp - 273.15)}°C</p>
                            <p class="card-text text-light">TEMPERATURA MAX: ${Math.round(data.main.temp_max - 273.15)}°C</p>
                            <p class="card-text text-light">TEMPERATURA MIN: ${Math.round(data.main.temp_min - 273.15)}°C</p>
                            <p class="card-text text-light">SENSACION TERMICA: ${Math.round(data.main.feels_like - 273.15)}°C</p>
                            <p class="card-text text-light">HUMEDAD: ${data.main.humidity}%</p>
                        </div>
                        <p id="horaActual" class="text-danger">${mostrarHora()}</p>
                    </div>
                    ${temperatura(data.main.temp - 273.15)}
                   
                </div>
            </div>`
        })
        .catch(error =>{
            console.log("error al obtener los datos del clima",error);
        })
}
