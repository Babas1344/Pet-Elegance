const carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item}`;
    lista.appendChild(li);
  });
}

function vaciarCarrito() {
  carrito.length = 0;
  mostrarCarrito();
}

// Resaltar enlace activo
const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {
  enlace.addEventListener("click", function () {
    enlaces.forEach(e => e.classList.remove("activo"));
    this.classList.add("activo");
  });
});

