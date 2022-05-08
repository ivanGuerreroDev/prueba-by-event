import { obtencionDeDatos } from './obtencionDeDatos.js'
export const renderTablas = async () => {
  const app = document.getElementById("app")
  const tabla = `
    <div id="tabla-container">
      <table class="uk-table uk-table-responsive uk-table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>lugar</th>
            <th>titulo</th>
            <th>presupuesto</th>
            <th>invitados</th>
            <th>fecha</th>
          </tr>
        </thead>
        <tbody id="espacioDatos"></tbody>
      </table>
    </div>
  `
  app.insertAdjacentHTML("beforeend", tabla)
}