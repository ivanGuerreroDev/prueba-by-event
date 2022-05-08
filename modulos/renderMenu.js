import { obtencionDeDatos, renderDatosTabla} from './obtencionDeDatos.js'

export const renderMenu = async () => {
  const app = document.getElementById("app")
  const menu = `
    
    <div uk-sticky="end: #transparent-sticky-navbar; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav class="uk-navbar-container" uk-navbar style="position: relative; z-index: 980;">
        <div class="uk-navbar-left">
          <span class="uk-navbar-item">Tipo de tablas</span>
          <ul class="uk-navbar-nav">
            <li><a id="menu-alfabetico">Alfabetico</a></li>
            <li><a id="menu-fecha">Fecha</a></li>
            <li><a id="menu-presupuesto">Presupuesto / Invitados</a></li>
            <li><a id="menu-grafico">Gráfico</a></li>
          </ul>
        </div>
      </nav>
    </div>
  `
  app.insertAdjacentHTML("beforeend", menu)
  const menuAlfabetico = document.getElementById("menu-alfabetico")
  menuAlfabetico.onclick = async ()=>{
    document.getElementById("tabla-container").style.display = 'block';
    document.getElementById("grafico-container").style.display = 'none';
    const datos = await obtencionDeDatos("alfabetico")
    renderDatosTabla(datos, "alfabetico")
    
  }

  const menuFecha = document.getElementById("menu-fecha")
  menuFecha.onclick = async ()=>{
    document.getElementById("tabla-container").style.display = 'block';
    document.getElementById("grafico-container").style.display = 'none';
    const datos = await obtencionDeDatos("fecha")
    renderDatosTabla(datos, "fecha")
    
  }

  const menuPresupuesto = document.getElementById("menu-presupuesto")
  menuPresupuesto.onclick = async ()=>{
    document.getElementById("tabla-container").style.display = 'block';
    document.getElementById("grafico-container").style.display = 'none';
    const datos = await obtencionDeDatos("presupuesto")
    renderDatosTabla(datos, "presupuesto")
    
  }

  const menuGrafico = document.getElementById("menu-grafico")
  menuGrafico.onclick = ()=>{
    document.getElementById("tabla-container").style.display = 'none';
    document.getElementById("grafico-container").style.display = 'block';
  }
  
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