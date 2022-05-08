import { obtencionDeDatos } from './obtencionDeDatos.js'
export const renderMenu = async () => {
  const app = document.getElementById("app")
  const menu = `
    <h3>Tipo de tablas</h3>
    <ul class="uk-navbar-nav">
      <li><a id="menu-alfabetico">Alfabetico</a></li>
      <li><a id="menu-fecha">Fecha</a></li>
      <li><a id="menu-presupuesto">Presupuesto / Invitados</a></li>
    </ul>
  `
  app.insertAdjacentHTML("beforeend", menu)
  const menuAlfabetico = document.getElementById("menu-alfabetico")
  menuAlfabetico.onclick = ()=>obtencionDeDatos("alfabetico")

  const menuFecha = document.getElementById("menu-fecha")
  menuFecha.onclick = ()=>obtencionDeDatos("fecha")

  const menuPresupuesto = document.getElementById("menu-presupuesto")
  menuPresupuesto.onclick = ()=>obtencionDeDatos("presupuesto")
  
  const menuItem = document.querySelectorAll(".uk-navbar-nav li")
  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function(event) {
      const all = document.querySelectorAll(".uk-navbar-nav li");
      for (var e = 0; e < all.length; e++) {
        all[e].classList.remove("uk-active");
      }
      this.classList.add("uk-active");
    });
  }
}