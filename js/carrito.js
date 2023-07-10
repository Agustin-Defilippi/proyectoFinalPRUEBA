const productos = JSON.parse(localStorage.getItem("prodCarrito") || []);
const excursionesCarrito = document.getElementById("carrito");

const renderProdCarrito = () =>{
    const prodCarrito = productos;
    prodCarrito.forEach(productos => {
        const cardCarrito = document.createElement("div");
       
        cardCarrito.innerHTML = `
        <div class="accordion acordeon " id="accordionPanelsStayOpenExample">
            <div class="accordion-item text-center contenido-carrito">
                <div class="cont-h2-button">
                    <h2 class="accordion-header button-acordeon" id="panelsStayOpen-heading${productos.posicion}">
                    ${productos.nombre}
                    </h2>
                    <div class="container-button">
                        <button class="accordion-button" type="button"              data-bs-toggle="collapse"           data-bs-target="#panelsStayOpen-collapse${productos.posicion}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${productos.posicion}">
                           Excursiones
                        </button>
                    </div>
                </div>
                <div id="panelsStayOpen-collapse${productos.posicion}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${productos.posicion}">
                    <div class="accordion-body">
                        <strong> <div class="excursionesTienda ">
                        <div class="card  css-pFiltrado card-excursiones text-ligth" style="width: 18rem;">
                            <img src="${productos.img}" class="card-img-top" alt="${productos.destino}">
                            <div class="card-body text-center">
                                <h4 class="mb-2"><b>${productos.nombre}</b><br></h4>
                                <p class="card-text">
                                Con Defilippi Tourlines esto es posible, aprovecha con nosotros la posibilidad de poder hacer tu  sueño realidad.<br><br>
                                <b>Precio</b>: <b>$${productos.precio}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <button id="${productos.id}" class="btn btn-warning">Eliminar</button>
                </div>
            </div>
        </div>`;
        excursionesCarrito.appendChild(cardCarrito);

        const btnEliminar = document.getElementById(`${productos.id}`);

        btnEliminar.addEventListener("click", () =>{
            eliminarProducto(productos.id);
        })
    });
}

renderProdCarrito();
enlistarProductos();
calcularTotal();

const btnPagar = document.getElementById("btnPagoExcursion");

btnPagar.addEventListener("click",() =>{
     
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su compra se ha realixado con Éxito!',
        showConfirmButton: false,
        background:"black",
        color:"white"
    })

    setTimeout(() =>{
        const carrito = document.getElementById("carrito");
        const total = document.getElementById("total");
        const contenedor = document.getElementById("contenedorPageCarro");
        contenedor.innerHTML= "<h1>MUCHAS GRACIAS POR ELEGIR DEFILIPPI TOURLINES</h1>";
        contenedor.className=`bg-warning text-center`;
        carrito.innerHTML = "";
        total.innerHTML = "";
        total.className= "";
        vaciarCarrito();
    },4000);
})

const btnVaciar = document.getElementById("vaciarCarro");

btnVaciar.addEventListener("click",() =>{
    vaciarCarrito();
})






const pagarTienda = () =>{
    const productosPrecio = productos;
    console.log(productosPrecio);
    const pagos = document.getElementById("pagos");
    productosPrecio.forEach(item =>{
        
        return pagos.innerHTML= `<p>${abonarViaje(selecTienda.value,item.precio)}</p>`
    })
}



const abonarViaje = (valorpPago,precio) =>{
   

    if(valorpPago === "debito"){
      return (precio * 0.8);
    }else if(valorpPago === "1 pago"){
      return (precio * 0.9);
    }else if(valorpPago === "3 pagos"){
      return precio;
    }else if(valorpPago === "6 pagos"){
      return (precio * 1.10);
    }else if(valorpPago === "12 pagos"){
      return (precio * 1.20);
    }else{
      return "";
    }
}

const selecTienda = document.getElementById("pagosTienda");

selecTienda.innerHTML("input",() =>{
    
    
    pagarTienda()

    
})