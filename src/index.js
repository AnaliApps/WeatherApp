import './style.css'
import createUI from './createUI.js'

document.body.appendChild(createUI())

let countryName = document.querySelector(".country")
let cityName = document.querySelector('.city')
let currentCondition = document.querySelector('.condition')
let currentTemperatureCelsius = document.querySelector('.temperatureCelsius')
let searchBtn = document.querySelector('#searchTerm')
let inputSearch = document.querySelector("#search")
let divWeather = document.querySelector(".content")
let image = document.createElement('img')
const loader = document.querySelector("#loader")
function displayLoading(){
    loader.classList.add("display")
    setTimeout(()=>{
        loader.classList.remove("display")
    },3000)
}

function hideLoading(){
    loader.classList.remove("display");
}

const getConditionIcon = async(cond)=>{
    displayLoading()
    let iconData = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=jBQEev5ckOnFQbbtnmGOthbcf1ryo6ya&s=${cond}`)
    let imageJson = iconData.json()
    return imageJson
}
const getWeather = async(location)=>{
    displayLoading()
    let weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=efbfeef610c14349bc8105207240806&q=${location}`)
    let weatherDatajson = await weatherData.json()
    return weatherDatajson
}
searchBtn.addEventListener('click',()=>{
    let placeToSearch = inputSearch.value;
    getWeather(placeToSearch).then(res=>{
        hideLoading()
        let loc = res.location.name
        let country = res.location.country
        let condition = res.current.condition.text
        let tempCelsius = res.current.temp_c
        let tempFarenheit = res.current.temp_f
        countryName.innerText = country;
        cityName.innerText = loc;
        currentCondition.innerText = condition;
        currentTemperatureCelsius.innerHTML = `${tempCelsius}&#176C`;
        console.log(loc,country,condition,tempCelsius,tempFarenheit)
        console.log(res)
        getConditionIcon(condition).then(res=>{
            hideLoading()
            let imageIcon = res.data.images.downsized.url;
            image.setAttribute('src',imageIcon)
            image.setAttribute('width','200px')
            // image.setAttribute('height','300px')
            console.log(imageIcon)
            divWeather.appendChild(image)
        }).catch(err => {
            console.error(err)
        })
    }).catch(err=>{
        console.error(`Error while fetching data: ${err}`)
    })

    image.removeAttribute('src')
})
