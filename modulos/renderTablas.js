import { obtencionDeDatos } from './obtencionDeDatos.js'
export const renderTablas = async () => {
  const app = document.getElementById("app")
  const tabla = `
    <table class="uk-table uk-table-responsive uk-table-divider">
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
  `
  app.insertAdjacentHTML("beforeend", tabla)
}