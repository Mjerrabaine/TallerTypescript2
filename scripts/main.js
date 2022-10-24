import { data } from './data.js';
var averageSeasons = document.getElementById("average-seasons");
var seriesTbody = document.getElementById('series');
var seriesCbody = document.getElementById('cards');
renderSeriesInTable(data);
averageSeasons.innerHTML = "Average seasons :".concat(getAverageSeasons(data));
function renderSeriesInTable(series) {
    console.log('Desplegando Series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td class=\"text-primary\">").concat(serie.name, "</td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener("click", function () { mostrarCard(series, serie.id); });
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var averageseasons = 0;
    series.forEach(function (serie) { return averageseasons = averageseasons + serie.seasons; });
    averageseasons = (averageseasons / series.length);
    var averageseasons2 = averageseasons.toFixed(1);
    return averageseasons2;
}
function mostrarCard(series, id) {
    console.log('Desplegando Card');
    switch (id) {
        case 1: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[0].imagen, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li >").concat(series[0].name, "</li>\n                             <li>").concat(series[0].synapsis, "</li>\n                             <li><a href=\"").concat(series[0].streaming, "\" class=\"card-link\">Asistir</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 2: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[1].imagen, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li >").concat(series[1].name, "</li>\n                             <li>").concat(series[1].synapsis, "</li>\n                             <li><a href=\"").concat(series[1].streaming, "\" class=\"card-link\">Asistir</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 3: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[2].imagen, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li >").concat(series[2].name, "</li>\n                             <li>").concat(series[2].synapsis, "</li>\n                             <li><a href=\"").concat(series[2].streaming, "\" class=\"card-link\">Asistir</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 4: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[3].imagen, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li >").concat(series[3].name, "</li>\n                             <li>").concat(series[3].synapsis, "</li>\n                             <li><a href=\"").concat(series[3].streaming, "\" class=\"card-link\">Asistir</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 5: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[4].imagen, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li >").concat(series[4].name, "</li>\n                             <li>").concat(series[4].synapsis, "</li>\n                             <li><a href=\"").concat(series[4].streaming, "\" class=\"card-link\">Asistir</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
        }
        case 6: {
            clearCard();
            var ulElement = document.createElement("ul");
            ulElement.innerHTML = "<li><img src=\"".concat(series[5].imagen, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                             <li >").concat(series[5].name, "</li>\n                             <li>").concat(series[5].synapsis, "</li>\n                             <li><a href=\"").concat(series[5].streaming, "\" class=\"card-link\">Asistir</a></li>");
            seriesCbody.appendChild(ulElement);
            break;
            break;
        }
    }
    ;
}
function clearCard() {
    while (seriesCbody.hasChildNodes()) {
        if (seriesCbody.firstChild != null) {
            seriesCbody.removeChild(seriesCbody.firstChild);
        }
    }
}
