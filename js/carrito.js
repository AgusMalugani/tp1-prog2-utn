// Cargar productos desde products-data.js
// (products-data.js debe contener el array "productos")

let carrito = JSON.parse(localStorage.getItem("carritoKey")) || [];

const contenedor = document.getElementById("carrito-lista");
const vacio = document.getElementById("carrito-vacio");
const totalGeneral = document.getElementById("total-general");

function renderCarrito() {
  contenedor.innerHTML = "";

  let total = 0;

  if (carrito.length === 0) {
    vacio.style.display = "block";
    totalGeneral.textContent = 0;
    return;
  }

  vacio.style.display = "none";

  carrito.forEach(item => {
    const prod = productos.find(p => p.id === item.id);

    if (!prod) return; // seguridad por si falta algún producto

    const div = document.createElement("div");
    div.classList.add("item-carrito");

    div.innerHTML = `
      <img src="${prod.imagen}">
      <div class="item-info">
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>

        <div class="cantidad-control">
          <button onclick="cambiarCantidad(${item.id}, -1)">-</button>
          <span>${item.cantidad}</span>
          <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
        </div>

        <p>Subtotal: $${prod.precio * item.cantidad}</p>

        <button onclick="eliminarProducto(${item.id})"
          style="margin-top:10px; background:red; color:white; padding:5px 10px; border:none; border-radius:5px; cursor:pointer;">
          Eliminar
        </button>
      </div>
    `;

    contenedor.appendChild(div);

    total += prod.precio * item.cantidad;
  });

  totalGeneral.textContent = total;
}

function cambiarCantidad(id, cambio) {
  carrito = carrito.map(item => {
    if (item.id === id) {
      item.cantidad += cambio;
      if (item.cantidad < 1) item.cantidad = 1;
    }
    return item;
  });

  localStorage.setItem("carritoKey", JSON.stringify(carrito));
  renderCarrito();
}

function eliminarProducto(id) {
  carrito = carrito.filter(item => item.id !== id);
  localStorage.setItem("carritoKey", JSON.stringify(carrito));
  renderCarrito();
}

function vaciarCarrito() {
  carrito = [];
  localStorage.setItem("carritoKey", JSON.stringify(carrito));
  renderCarrito();
}

renderCarrito();

/* ---------------- MÉTODOS DE PAGO ---------------- */

function mostrarTransferencia() {
  document.getElementById("mensaje-pago").style.display = "none";
  document.getElementById("qr-mp").style.display = "none";

  const info = document.getElementById("info-transferencia");
  info.style.display = info.style.display === "none" ? "block" : "none";
}

function mostrarTarjeta() {
  document.getElementById("info-transferencia").style.display = "none";
  document.getElementById("qr-mp").style.display = "none";

  const msg = document.getElementById("mensaje-pago");
  const texto = document.getElementById("mensaje-texto");

  texto.textContent = "Próximamente";
  msg.style.display = "block";
}

function mostrarPayPal() {
  document.getElementById("info-transferencia").style.display = "none";
  document.getElementById("qr-mp").style.display = "none";

  const msg = document.getElementById("mensaje-pago");
  const texto = document.getElementById("mensaje-texto");

  texto.textContent = "Si no tenés dólares croto";
  msg.style.display = "block";
}

function mostrarMercadoPago() {
  document.getElementById("info-transferencia").style.display = "none";
  document.getElementById("mensaje-pago").style.display = "none";

  const qr = document.getElementById("qr-mp");
  qr.style.display = "block";
}
function mostrarPopupPago() {
  document.getElementById("popup-pago").style.display = "block";
}

function cerrarPopupPago() {
  document.getElementById("popup-pago").style.display = "none";
}
