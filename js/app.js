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
              <div class="card mb-1 shadow-sm rounded-0 border-0">
                    <div class="card-body">
                      <h5 class="card-title">${siteTemplateData['Country']}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${siteTemplateData['Date']}</h6>
                      <div class="my-2">
                        <p class="card-text my-0">New Confirmed ${siteTemplateData['NewConfirmed']}</p>
                        <p class="card-text my-0">Total Confirmed ${siteTemplateData['TotalConfirmed']}</p>
                        <p class="card-text my-0">New Deaths ${siteTemplateData['NewDeaths']}</p>
                        <p class="card-text my-0">Total Deaths ${siteTemplateData['TotalDeaths']}</p>
                        <p class="card-text my-0">New Recovered ${siteTemplateData['NewRecovered']}</p>
                        <p class="card-text my-0">Total Recovered ${siteTemplateData['TotalRecovered']}</p>
                      </div>
                    </div>
                  </div>
            `;
    });
    let nodeElm = document.getElementById("countrywisedata");
    if (countrywisedataObj.length != 0) {
        nodeElm.innerHTML = html;
    } else {
        nodeElm.innerHTML = ``;
    }
}

