export default function createUI(){
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('class','main');
    let searchBarDiv = document.createElement('div');
    searchBarDiv.setAttribute('class','search');
    let inputSearch = document.createElement('input');
    inputSearch.setAttribute('placeholder','Enter City...');
    inputSearch.setAttribute('id','search');
    searchBarDiv.appendChild(inputSearch)
    let btnSearch = document.createElement('button');
    btnSearch.setAttribute('id','searchTerm')
    btnSearch.textContent = 'Search';
    searchBarDiv.appendChild(btnSearch);
    mainDiv.appendChild(searchBarDiv);

    let weatherDiv = document.createElement('div');
    weatherDiv.setAttribute('class','weatherdetails');
    let contentDiv = document.createElement('div')
    contentDiv.setAttribute('class','content');
    let loaderDiv = document.createElement('div')
    loaderDiv.setAttribute('id','loader')
    loaderDiv.setAttribute('class','center')
    contentDiv.appendChild(loaderDiv);
    let h1 = document.createElement('h1');
    h1.setAttribute('class','country');
    let pCity = document.createElement('p');
    pCity.innerHTML = `<b class="city"></b>`
    let pCondition = document.createElement('p');
    pCondition.setAttribute('class','condition');
    let pTemp = document.createElement('p');
    pTemp.setAttribute('class','temperatureCelsius');
    contentDiv.appendChild(h1);
    contentDiv.appendChild(pCity);
    contentDiv.appendChild(pCondition);
    contentDiv.appendChild(pTemp)
    weatherDiv.appendChild(contentDiv)
    mainDiv.appendChild(weatherDiv)
    return mainDiv;
}
