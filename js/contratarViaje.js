const destinoFinal = JSON.parse(localStorage.getItem("paqueteViajeBusqueda"));
console.log(destinoFinal);

const h1 = document.getElementById("defilippi-destino");
h1.innerHTML=`Defilippi Tourlines Y <b>${destinoFinal.nombre.toUpperCase()}</b> te están esperando!`;

const comprarViaje= document.getElementById("comprarViaje");
comprarViaje.innerHTML=`Complete el formulario para contratar  <b>${destinoFinal.nombre}</b> a su paquete de viajes y así poder generar el pago del mismo.`;

const formaPago = document.getElementById("formaPago");

formaPago.addEventListener("input", (e) =>{
  e.preventDefault()
  const pagosDefinidos = document.getElementById("pagosDefinidos");
  pagosDefinidos.innerHTML=`<p> <b>${formaPago.value}</b> = <b>$${abonarViaje(formaPago.value).toFixed(2)} pesos</b>.</p>`;
  pagosDefinidos.className="pagos"
})

class PasajeCliente{
    constructor(nombre,apellido,edad,dni,correo,provincia,ciudad,nacionalidad){
        this.nombrePasajero = nombre;
        this.apellidoPasajero = apellido;
        this.edadUsuario = edad
        this.dni = dni;
        this.correoElectronico = correo;
        this.provincia = provincia;
        this.localidad = ciudad;
        this.ciudad = ciudad;
        this.nacionalidad = nacionalidad;
    }
    nacionalidadPasajero(){
      if(this.nacionalidad === "ARGENTINO"){
        return"Usted es argentino, ingrese a MI ARGENTINA y descargue el certificado de vacunacion contra COVID-19.";
      }else if(this.nacionalidad !== "ARGENTINO"){
        return"Usted es extranjero, por lo tanto debera presentar carnet de vacunacion contra COVID-19, y sera excluyente el aplicado de tres dosis correspondientes.";
      }else{
        return"ingreso un dato incorrecto.";
      }
    }
}

const fomularioIngresoUsuario = document.getElementById("fomularioUsuario");

fomularioIngresoUsuario.addEventListener("submit",(e) =>{
  e.preventDefault();
 
  let datosDeUsuario = datosUsuario();

  console.log(datosDeUsuario);
  
  if (validarFormularioUsuario() == true) {
    const menorEdad = document.getElementById("menorEdad");
    const nacionalidad = document.getElementById("nacionalidad");
    const edadMinima = 17;
    menorEdad.className="text-dark bg-warning";
    nacionalidad.className="text-dark bg-warning";
    validarEdad(datosDeUsuario,edadMinima);
    nacionalidad.innerHTML= datosDeUsuario.nacionalidadPasajero();
    JSON.parse(localStorage.getItem("paqueteViajeBusqueda"));
    localStorage.setItem("datosUsuario", JSON.stringify(datosDeUsuario));
  }
});
