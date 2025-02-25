import React from "react";
import axios from 'axios';

export default function Weatherforecast(props){

function handleResponse(response){
    console.log(response.data);
}

let lat=40.7;
let lon=74;
let apiKey=`tba3e25ffd38f7e512a5944489457o05`
  let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}`
axios.get(apiUrl).then(handleResponse);



    return (
<div className="col-sm-2">
<div className="eachSection">
    <p>Thursday</p>
    <span className="me-4">18</span><span>20</span>
</div>

</div>


    );
}