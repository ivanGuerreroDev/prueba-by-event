import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
import { db } from "../app.js";

export const obtencionDeDatos = () => {
    let app = document.getElementById("app")
    let datos = []
    let tabla = `
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
    let espacioDatos = document.getElementById("espacioDatos")
    const q = query(collection(db, "EVENTOS"));
    let i = 0
    async function obtenerDatos() {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            datos.push(doc.data())
            espacioDatos.insertAdjacentHTML("beforeend",
                `<tr>
                    <td>${i+1}</td>
                    <td>${doc.data().lugar}</td>
                    <td>${doc.data().titulo}</td>
                    <td>${doc.data().presupuesto}</td>
                    <td>${doc.data().invitados}</td>
                    <td>${doc.data().fecha}</td>
            </tr>`

            )
            i++
        });
    }
    obtenerDatos()
    console.log("Datos: ", datos)
}