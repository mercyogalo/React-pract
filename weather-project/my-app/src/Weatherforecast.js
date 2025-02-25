import React from "react";
import css from "./App.css"

export default function Weatherforecast(props){

    return (
        <div className="Weatherforecast container">  
         <div className="row">  
<div className="col-sm-10 ">
    
<div className="col-sm-2 eachSection">
    <p>Thursday</p>
    <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" alt="weather-icon" />
    <br/>
    <span className="me-4">18</span><span>20</span>
</div>

<div className="col-sm-2 eachSection">
    <p>Thursday</p>
    <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" alt="weather-icon" />
    <br/>
    <span className="me-4">18</span><span>20</span>
</div>


<div className="col-sm-2 eachSection">
    <p>Thursday</p>
    <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" alt="weather-icon" />
    <br/>
    <span className="me-4">18</span><span>20</span>
</div>


</div>
</div>


</div>



    );
}