fetch('https://api.covid19api.com/summary').then(function (response) {
    return response.json();
}).then(function (data) {
    // console.log(data);
    // global = data['Global']
    getData(data)
    CountryWiseData(data)
}).catch(function () {
    console.log("Booo");
});


function getData(data) {
    // console.log(data['Global'])
    document.getElementById('NewConfirmed').innerHTML = data['Global']['NewConfirmed']
    document.getElementById('TotalConfirmed').innerHTML = data['Global']['TotalConfirmed']
    document.getElementById('NewDeaths').innerHTML = data['Global']['NewDeaths']
    document.getElementById('TotalDeaths').innerHTML = data['Global']['TotalDeaths']
    document.getElementById('NewRecovered').innerHTML = data['Global']['NewRecovered']
    document.getElementById('TotalRecovered').innerHTML = data['Global']['TotalRecovered']
}

function CountryWiseData(data) {
    countrywisedataObj = data['Countries'];
    let html = "";
    countrywisedataObj.forEach(function (siteTemplateData, i) {
        html += `              
            <li class="list-group-item rounded-0">
              <h5>${siteTemplateData['Country']}</h5>
              <p>${siteTemplateData['Date']}</p>
              <div class="my-2">
                  <p class="card-text my-0 d-flex justify-content-between"><span>New Confirmed</span> <span>${siteTemplateData['NewConfirmed']}</span></p>
                  <p class="card-text my-0 d-flex justify-content-between"><span>Total Confirmed</span> <span>${siteTemplateData['TotalConfirmed']}</span></p>
                  <p class="card-text my-0 d-flex justify-content-between"><span>New Deaths</span> <span>${siteTemplateData['NewDeaths']}</span></p>
                  <p class="card-text my-0 d-flex justify-content-between"><span>Total Deaths</span> <span>${siteTemplateData['TotalDeaths']}</span></p>
                  <p class="card-text my-0 d-flex justify-content-between"><span>New Recovered</span> <span>${siteTemplateData['NewRecovered']}</span></p>
                  <p class="card-text my-0 d-flex justify-content-between"><span>Total Recovered</span> <span>${siteTemplateData['TotalRecovered']}</span></p>
                </div>
            </li>
            `;
    });
    let nodeElm = document.getElementById("countrywisedata");
    if (countrywisedataObj.length != 0) {
        nodeElm.innerHTML = html;
    } else {
        nodeElm.innerHTML = ``;
    }
}

