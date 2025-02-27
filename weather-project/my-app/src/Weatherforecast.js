import React, { useState } from "react";
import css from "./App.css"
import axios from "axios"
import WeatherforecastDay from "./WeatherforecastDay";

export default function Weatherforecast(props){
    let [loaded,setLoaded]=useState(false);
    let [forecast,setForecast]=useState(null);

function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
}

if (loaded && forecast && forecast.length > 0) {
    return (
        <div className="Weatherforecast container">  
         <div className="row  forecast-section">  

{forecast.map(function(dailyForecast,index){
    return (
        <div className="col-md-1 eachSection " key={index}>
        <WeatherforecastDay forecast={dailyForecast} />
        </div>
    );
})}
   


</div>
</div>



    );


}
else{

    let apiKey=`tba3e25ffd38f7e512a5944489457o05`
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&key=${apiKey}`
    axios.get(apiUrl).then(handleResponse);



}




  
}