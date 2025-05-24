let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  document.getElementById("contador").textContent = carrito.length;
  alert(`${nombre} agregado al carrito.`);
}

function verCarrito() {
  const lista = document.getElementById("listaCarrito");
  lista.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio.toLocaleString()}`;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = total.toLocaleString();
  document.getElementById("carrito").classList.remove("oculto");
}

function cerrarCarrito() {
  document.getElementById("carrito").classList.add("oculto");
}
