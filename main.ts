import { Serie } from './serie.js';

import { data } from './data.js';

const averageSeasons: HTMLElement = document.getElementById("average-seasons")!;
let seriesTbody: HTMLElement = document.getElementById('series')!;
let seriesCbody: HTMLElement = document.getElementById('cards')!;

renderSeriesInTable(data);

averageSeasons.innerHTML = `Average seasons :${getAverageSeasons(data)}`




function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando Series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td class="text-primary">${serie.name}</td>
                           <td>${serie.canal}</td>
                           <td>${serie.seasons}</td>`;
                           trElement.addEventListener("click", function(){mostrarCard(series, serie.id);});
    seriesTbody.appendChild(trElement);
  });
}



function getAverageSeasons(series: Serie[]): string {
  let averageseasons: number = 0;
  series.forEach((serie) => averageseasons = averageseasons + serie.seasons);
  averageseasons= (averageseasons/series.length);
  let averageseasons2 : string = averageseasons.toFixed(1);
  return averageseasons2;
}

function mostrarCard(series: Serie[], id:number): void {
  console.log('Desplegando Card');
  switch(id){
    case 1:{
      clearCard();
      let ulElement = document.createElement("ul");
      ulElement.innerHTML = `<li><img src="${series[0].imagen}" class="card-img-top" alt="Imagen-Serie"></li>
                             <li >${series[0].name}</li>
                             <li>${series[0].synapsis}</li>
                             <li><a href="${series[0].streaming}" class="card-link">Asistir</a></li>`;
      seriesCbody.appendChild(ulElement);
      break;
    }
    case 2:{
      clearCard();
      let ulElement = document.createElement("ul");
      ulElement.innerHTML = `<li><img src="${series[1].imagen}" class="card-img-top" alt="Imagen-Serie"></li>
                             <li >${series[1].name}</li>
                             <li>${series[1].synapsis}</li>
                             <li><a href="${series[1].streaming}" class="card-link">Asistir</a></li>`;
      seriesCbody.appendChild(ulElement);
      break;
    }
    case 3:{
      clearCard();
      let ulElement = document.createElement("ul");
      ulElement.innerHTML = `<li><img src="${series[2].imagen}" class="card-img-top" alt="Imagen-Serie"></li>
                             <li >${series[2].name}</li>
                             <li>${series[2].synapsis}</li>
                             <li><a href="${series[2].streaming}" class="card-link">Asistir</a></li>`;
      seriesCbody.appendChild(ulElement);
      break;
    }
    case 4:{
      clearCard();
      let ulElement = document.createElement("ul");
      ulElement.innerHTML = `<li><img src="${series[3].imagen}" class="card-img-top" alt="Imagen-Serie"></li>
                             <li >${series[3].name}</li>
                             <li>${series[3].synapsis}</li>
                             <li><a href="${series[3].streaming}" class="card-link">Asistir</a></li>`;
      seriesCbody.appendChild(ulElement);
      break;
    }
    case 5:{
      clearCard();
      let ulElement = document.createElement("ul");
      ulElement.innerHTML = `<li><img src="${series[4].imagen}" class="card-img-top" alt="Imagen-Serie"></li>
                             <li >${series[4].name}</li>
                             <li>${series[4].synapsis}</li>
                             <li><a href="${series[4].streaming}" class="card-link">Asistir</a></li>`;
      seriesCbody.appendChild(ulElement);
      break;
    }
    case 6:{
      clearCard();
      let ulElement = document.createElement("ul");
      ulElement.innerHTML = `<li><img src="${series[5].imagen}" class="card-img-top" alt="Imagen-Serie"></li>
                             <li >${series[5].name}</li>
                             <li>${series[5].synapsis}</li>
                             <li><a href="${series[5].streaming}" class="card-link">Asistir</a></li>`;
      seriesCbody.appendChild(ulElement);
      break;
      break;
    }
  };
}

function clearCard() {
  while (seriesCbody.hasChildNodes()) {
    if (seriesCbody.firstChild != null) {
      seriesCbody.removeChild(seriesCbody.firstChild);
     
    }
  }
}