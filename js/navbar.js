// Variables
const navbar = document.querySelector("#navbar-elements");
const openNav = document.querySelector("#open");
const closeNav = document.querySelector("#close");

// Eventos
openNav.addEventListener("click", openNavbar);
closeNav.addEventListener("click", closeNavbar)

// Funciones

function openNavbar() {
  if(navbar) {
    navbar.classList.remove("top-[-100%]");
    navbar.classList.add("top-[20%]");
    openNav.classList.add("hidden");
    closeNav.classList.remove("hidden");
  }
}

 function closeNavbar() {
  if(navbar) {
    navbar.classList.remove("top-[20%]");
    navbar.classList.add("top-[-100%]");
    openNav.classList.remove("hidden");
    closeNav.classList.add("hidden");
  }
}





