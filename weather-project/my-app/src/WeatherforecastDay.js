import React from "react";



export default function WeatherforecastDay(props){
 
    function maxTemp(){
        let maxTemp=Math.round(props.forecast.temperature.maximum);
        return maxTemp;
    }

    function minTemp(){
        let minTemp=Math.round(props.forecast.temperature.minimum);
        return minTemp;
    }




    return (
        <div className="col-md-1 eachSection ">
        <p>{props.time}</p>
        <img src={`${props.forecast.condition.icon_url}`} alt="weather-icon" />
        <br/>
        <span className="me-4">{minTemp()}°</span><span>{maxTemp()}°</span>
    </div>
    )
}