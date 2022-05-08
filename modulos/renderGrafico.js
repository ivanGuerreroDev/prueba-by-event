import { obtencionDeDatos } from './obtencionDeDatos.js'
export const renderGrafico = async () => {
  const app = document.getElementById("app")
  const render = `
    <div id="grafico-container"><canvas id="myChart" style="width:100%;minHeight:500px"></canvas></div>
  `
  app.insertAdjacentHTML("beforeend", render)
  const datos = await obtencionDeDatos()
  const labels = mapLabels(datos)
  const datasets = dataSets(datos, labels)
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: datasets
    },
    options:{
      elements: {
        bar: {
          borderWidth: 5,
        }
      },
      responsive: true,
      plugins:{
        legend: {
          display: false
        }
      }
    }
  });
}

const mapLabels = (datos) => {
  const labels = []
  datos.forEach(element => {
    if(!labels.includes(element.lugar)){
      labels.push(element.lugar)
    }
  })
  return labels
}
const dataSets = (datos, labels) => {
  const dataSetsObject = {}
  datos.forEach(element => {
    if(!dataSetsObject[element.lugar]){
      dataSetsObject[element.lugar] = [element.presupuesto]
    }else{
      dataSetsObject[element.lugar].push(element.presupuesto)
    }
  })
  let max = 0;
  Object.keys(dataSetsObject).forEach(key => {
    if(dataSetsObject[key].length > max){
      max = dataSetsObject[key].length
    }
  })
  const dataSetsReturn = []
  for (let i = 0; i < max; i++) {
    dataSetsReturn.push(
      {
        label: i,
        data: new Array(max).fill(null),
        borderWidth: 1,
        backgroundColor: new Array(max).fill(0).map(generateRandomColor),
      }
    )
  }
  dataSetsReturn.forEach((item, index) => {
    Object.keys(dataSetsObject).forEach((key, i) => {
      item.data[i] = dataSetsObject[key][index]
    }) 
  })
  return dataSetsReturn
}

function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}