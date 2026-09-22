// guardamos la cantidad seleccionada de cada producto, por id
const cantidades = {};
productos.forEach((p) => (cantidades[p.id] = 1));

const section = document.getElementById("productos");

for (let i = 0; i < productos.length; i++) {
  const product = productos[i];

  const div = document.createElement("div");
  div.classList.add("cont-prod");

  const imgWrap = document.createElement("div");
  imgWrap.classList.add("img-wrap");
  const img = document.createElement("img");
  img.src = product.imagen;
  img.alt = product.nombre;
  imgWrap.appendChild(img);

  const h3 = document.createElement("h3");
  h3.classList.add("nombre-prod");
  h3.textContent = product.nombre;

  const precioWrap = document.createElement("div");
  precioWrap.classList.add("precio-wrap");
  precioWrap.innerHTML = `<span class="label">Precio</span> <span class="precio">$${product.precio}</span>`;

  // --- selector de cantidad ---
  const cantidadWrap = document.createElement("div");
  cantidadWrap.classList.add("cantidad-wrap");

  const btnMenos = document.createElement("button");
  btnMenos.classList.add("btn-cantidad");
  btnMenos.textContent = "-";

  const spanCantidad = document.createElement("span");
  spanCantidad.classList.add("cantidad-num");
  spanCantidad.textContent = cantidades[product.id];

  const btnMas = document.createElement("button");
  btnMas.classList.add("btn-cantidad");
  btnMas.textContent = "+";

  btnMenos.onclick = () => {
    if (cantidades[product.id] > 1) {
      cantidades[product.id]--;
      spanCantidad.textContent = cantidades[product.id];
    }
  };

  btnMas.onclick = () => {
    cantidades[product.id]++;
    spanCantidad.textContent = cantidades[product.id];
  };

  cantidadWrap.appendChild(btnMenos);
  cantidadWrap.appendChild(spanCantidad);
  cantidadWrap.appendChild(btnMas);
  // --- fin selector de cantidad ---

  const button = document.createElement("button");
  button.classList.add("btn-carrito");
  button.textContent = "Agregar al carrito";
  button.onclick = () => agregarCarrito(product.id, cantidades[product.id]);

  div.appendChild(imgWrap);
  div.appendChild(h3);
  div.appendChild(precioWrap);
  div.appendChild(cantidadWrap);
  div.appendChild(button);
  section.appendChild(div);
}

function agregarCarrito(id, cantidad) {
  //console.log(`Producto ${id} - Cantidad: ${cantidad}`);

  const carritoLocal = JSON.parse(localStorage.getItem("carritoKey")) || [];

  if (!Array.isArray(carritoLocal)) {
    carritoLocal = [];
  }
  //if (carritoLocal) {
  const carrito = {
    id: id,
    cantidad: cantidad,
  };
  console.log(carrito);
  //HACER VALIDACION A PARTIR DE ESTA LINEA
  for (let i = 0; i < carritoLocal.length; i++) {
    if (carrito.id === carritoLocal[i].id) {
      carritoLocal[i].cantidad = carrito.cantidad + carritoLocal[i].cantidad;
      localStorage.setItem("carritoKey", JSON.stringify(carritoLocal));
      return;
    }
  }

  carritoLocal.push(carrito);
  console.log(carritoLocal);
  localStorage.setItem("carritoKey", JSON.stringify(carritoLocal));
}
