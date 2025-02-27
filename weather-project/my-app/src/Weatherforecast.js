import React, { useState } from "react";
import css from "./App.css"
import axios from "axios"

export default function Weatherforecast(props){
    let [loaded,setLoaded]=useState(false);
    let [forecast,setForecast]=useState(null);

function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
}

if (loaded && forecast && forecast.length > 0) {
    console.log({forecast});
    return (
        <div className="Weatherforecast container">  
         <div className="row  forecast-section">  


    <div className="col-md-1 eachSection ">
    <p>Thursday</p>
    <img src={`${forecast[0].condition.icon_url}`} alt="weather-icon" />
    <br/>
    <span className="me-4">{forecast[0].temperature.minimum}</span><span>{forecast[0].temperature.maximum}</span>
</div>




</div>
</div>



    );


}
else{

    let apiKey=`tba3e25ffd38f7e512a5944489457o05`
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lat=${props.latitude}&lon=${props.longitude}&key=${apiKey}`
    axios.get(apiUrl).then(handleResponse);



}




  
}