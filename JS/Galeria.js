window.onload = function () {
  setTimeout(function () {
    document.getElementById("Galeria-title").style.opacity = "1";
  }, 500);
  setTimeout(function () {
    document.getElementById("contact-link-ig").style.opacity = "1";
  }, 1000);
  setTimeout(function () {
    document.getElementById("contact-link-fb").style.opacity = "1";
  }, 1000);
  setTimeout(function () {
    document.getElementById("contact-link-wpp").style.opacity = "1";
  }, 1000);
};

var grid = new Muuri(".grid", {
  layout: {
    rounding: false,
  },
});

window.addEventListener("load", () => {
  grid.refreshItems().layout();
  document.getElementById("grid").classList.add("imagenes-cargadas");
});

const overlay = document.getElementById("overlay");
document.querySelectorAll(".grid .item img").forEach((elemento) => {
  elemento.addEventListener("click", () => {
    const ruta = elemento.getAttribute("src");

    overlay.classList.add("activo");
    document.querySelector("#overlay img").src = ruta;
  });
});

document.querySelector("#btn-cerrar-popup").addEventListener("click", () => {
  overlay.classList.remove("activo");
});

overlay.addEventListener("click", (evento) => {
  if (evento.target.id === "overlay") {
    overlay.classList.remove("activo");
  }
});

const menu = document.querySelector(".menu");
const burgerButton = document.querySelector(".burger-button");

const ipad = window.matchMedia("screen and (max-width:908px)");
ipad.addListener(validation);

burgerButton.addEventListener("click", hideShow);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", hideShow);
  } else {
    burgerButton.removeEventListener("click", hideShow);
  }
}

function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}
