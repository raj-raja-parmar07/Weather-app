// http://api.weatherapi.com/v1/current.json?key=aedd9cd520cf411dba6205947261803&q=dewas&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const weatherField = document.querySelector(".condition p");
const serachField = document.querySelector(".serach_area");
// const serachbutton = document.querySelector(".serach_button");
const form = document.querySelector('form');

form.addEventListener('submit', serachForLocation)



let target = 'indore'

const fetchResults = async (targetlocation)=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=aedd9cd520cf411dba6205947261803&q=${targetlocation}&aqi=no` 

    

    const res = await fetch(url)

    const data = await res.json()

    console.log(data)

    let locationname = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text
    let condition_icon = data.current.condition.icon
    updateDetails(temp, locationname , time, condition)

    
}

function updateDetails(temp, locationname, time, condition){
    temperatureField.innerText = temp
    locationField.innerText = locationname
    dateField.innerText = time
    weatherField.innerText = condition


}



function serachForLocation(e){

    e.preventDefault()
    target = serachField.value
    fetchResults(target)

}



fetchResults(target)
