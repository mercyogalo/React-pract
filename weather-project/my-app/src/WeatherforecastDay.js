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


    function day(){
        let date=new Date(props.forecast.time*1000);

        let days=[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ]

        let day=days[date.getDay()];
        return day;
    }


    return (
        <div className="col-md-1 eachSection ">
        <p>{day()}</p>
        <img src={`${props.forecast.condition.icon_url}`} alt="weather-icon" />
        <br/>
        <span className="me-4">{minTemp()}°</span><span>{maxTemp()}°</span>
    </div>
    )
}