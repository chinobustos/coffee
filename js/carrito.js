const pintarCarrito = () => {

    modalContainer.innerHTML = "";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h2 class = "modal-header-title">Carrito</h2>
    `;
    modalContainer.append(modalHeader);
  
    const modalbutton = document.createElement("h2");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener("click" , () => {
     modalContainer.style.display = "none";
    });
  
    modalHeader.append(modalbutton);
  
  
    carrito.forEach((product) => {
      let carritoContent = document.createElement ("div");
      carrito.className = "modal-container"
      carritoContent.innerHTML = `
      <img src ="${product.img}">
      <h3>${product.nombre}</h3>
      <p>${product.precio}$</p>
      <p> cantidad:${product.cantidad}</p>
      <p> Total: ${product.cantidad * product.precio}</p>
      `;
      modalContainer.append(carritoContent);
      console.log(carrito.length);


      let eliminar = document.createElement("span");
      eliminar.innerText = "🗑️";
      eliminar.className = "delete-product";
      carritoContent.append(eliminar);
      eliminar.addEventListener("click", eliminarProducto);
  
    });
  
    const total = carrito.reduce((acc,el) => acc + el.precio  , 0);
  
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar : ${total}$`;
    modalContainer.append(totalBuying);
};
verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
  const foundId = carrito.find((element) => element.id);
  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  carritoCounter();
  saveLocal();
  pintarCarrito();
};

const saveLocal = () =>{
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
//set item
const carritoCounter = () =>{
  cantidadCarrito.style.display = "flex";
  const carritoLength = carrito.length
  localStorage.setItem("carritoLength",JSON.stringify(carritoLength))
  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
};
