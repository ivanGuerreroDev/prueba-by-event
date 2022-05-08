import { collection, query, where, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
import { db } from "../app.js";

export const obtencionDeDatos = async (type) => {
    let q;
    const eventosDB = collection(db, "EVENTOS")
    switch (type) {
        case "alfabetico":
            q = query(eventosDB, orderBy("lugar", "asc"));
            break;
        case "presupuesto":
            q = query(eventosDB, orderBy("presupuesto", "asc"));
            break;
        default:
            q = query(eventosDB);
            break;
    }
    if(q&&q!==null){
        const querySnapshot = await getDocs(q);
        const datosDeLaTabla = await querySnapshot.docs.map(doc => doc.data());    
        const espacioDatos = document.getElementById("espacioDatos")
        espacioDatos.innerHTML = "";
        let i = 0
        switch (type) {
            case "fecha":
                datosDeLaTabla.forEach(element => {
                    const fecha = moment(element.fecha, 'D/M/YYYY')
                    fecha.set({hour:0,minute:0,second:0,millisecond:0})
                    const current = moment()
                    current.set({hour:0,minute:0,second:0,millisecond:0})
                    const diff = current.diff(fecha, 'days')
                    espacioDatos.insertAdjacentHTML("beforeend",
                    `<tr style="background: ${diff>0?'#BB6464':diff<0?'#FBF8F1':'#B4CFB0'}">
                        <td>${i + 1}</td>
                        <td>${element.lugar}</td>
                        <td>${element.titulo}</td>
                        <td>${element.presupuesto}</td>
                        <td>${element.invitados}</td>
                        <td>${element.fecha}</td>
                    </tr>`
                    )
                    i++;
                });
                break;
            case "presupuesto":
                datosDeLaTabla.forEach(element => {
                    espacioDatos.insertAdjacentHTML("beforeend",
                    `<tr style="background: ${element.presupuesto>5?'#B4CFB0':element.presupuesto<5?'#BB6464':'#FBF8F1'}">
                        <td>${i + 1}</td>
                        <td>${element.lugar}</td>
                        <td>${element.titulo}</td>
                        <td>${element.presupuesto}</td>
                        <td>${element.invitados}</td>
                        <td>${element.fecha}</td>
                    </tr>`
                    )
                    i++;
                });
                break;
            default:
                datosDeLaTabla.forEach(element => {
                    espacioDatos.insertAdjacentHTML("beforeend",
                    `<tr>
                        <td>${i + 1}</td>
                        <td>${element.lugar}</td>
                        <td>${element.titulo}</td>
                        <td>${element.presupuesto}</td>
                        <td>${element.invitados}</td>
                        <td>${element.fecha}</td>
                    </tr>`
                    )
                    i++;
                });
                break;
        }
        
    }else{
        const espacioDatos = document.getElementById("espacioDatos")
        espacioDatos.innerHTML = "";
    }
}