import React , {useState} from "react"
import axios from 'axios';
import './App.css';
import FormattedDate from './FormattedDate'
import Weatherforecast from "./Weatherforecast";

function App() {

let [city, setCity]=useState(" ");
let [loader,setLoader]=useState(false);
let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [description, setDescription] = useState("");
  let [wind, setWind] = useState("");
  let [image, setImage] = useState("");
  let [currentdate, setDate] = useState(null);
  let[cityName,setCityName]=useState("");
  let [country,setCountry]=useState("");
  let [coordinates, setCoordinates]=useState("");

  function handleForm(e){
    e.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72bb9dab46b9ec3d65f423c63f27a9b8&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

function displayTemperature(response){
 setHumidity( Math.round(response.data.main.humidity));
 setWind( Math.round(response.data.wind.speed));
  setDescription(response.data.weather[0].description);
  setImage(response.data.weather[0].icon);
  setDate(new Date(response.data.dt * 1000)); 
 setTemperature( Math.round(response.data.main.temp));
  setCityName(response.data.name);
  setCoordinates(response.data.coord);
  setCountry(response.data.sys.country);
  return  setLoader(true);
}


  function handleCity(e){
    return setCity(e.target.value);
  }






  let form=(
<header>
<form className="form" onSubmit={handleForm}>
  <input
    type="text"
    placeholder="Enter a city.."
    className="search-input "
    onChange={handleCity}
  />
  <input type="submit" value="Search" className="search-button" />
</form>
</header>

  )


 if (loader) {
  return (
<div className=" weather-app-section">
       <div className="row ">

       <div className="col-sm-12">
    {form}
    </div>


    <div className="col-sm-5 ms-3">
    <div className="temperature">
   <p>{temperature}<sup>°</sup></p>
   </div>  

<p className="description"> {description}</p>



<p>Humidity: {humidity}%</p>
<p>   Wind Speed: {wind} m/s</p>
</div>



   <div className="col-sm-5 ms-2 temperature-section ">
    
   <p className="time"><FormattedDate current={currentdate} /> </p>

<div>
   {image && (<img
                  src={`http://openweathermap.org/img/wn/${image}@2x.png`}
                  alt="Weather icon"
                />
              )}
              </div>
    
<h1> {cityName}, <span>{country}</span></h1>


</div>



<Weatherforecast  city={cityName} coordinates={coordinates}/>


</div>
     </div>

  );
}

 else{



function handleNairobi(response){
 setHumidity(Math.round(response.data.main.humidity));
  setWind(Math.round(response.data.wind.speed));
  setDescription(response.data.weather[0].description);
  setImage(response.data.weather[0].icon);
 setTemperature(Math.round(response.data.main.temp));
  setCountry(response.data.sys.country);
  setDate(new Date(response.data.dt * 1000)); 
  setCoordinates(response.data.coord);
}


  let city="Nairobi"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72bb9dab46b9ec3d65f423c63f27a9b8&units=metric`;
  axios.get(apiUrl).then(handleNairobi)
  return (
    <div className=" weather-app-section">
       <div className="row ">

       <div className="col-sm-12">
    {form}
    </div>


    <div className="col-sm-5 ms-3">

    <div className="temperature">
   <p>{temperature}<sup>°</sup></p>
   </div>  

<p className="description"> {description}</p>



<p>Humidity: {humidity}%</p>
<p>   Wind Speed: {wind} m/s</p>
</div>


   <div className="col-sm-5 ms-2 temperature-section ">
    
   <p className="time">{currentdate ? <FormattedDate current={currentdate} /> : "Loading date..."}</p>

<div>
   {image && (<img
                  src={`http://openweathermap.org/img/wn/${image}@2x.png`}
                  alt="Weather icon"
                />
              )}
              </div>
    
<h1> {cityName ? {cityName} : `Nairobi`}, <span>{country}</span></h1>


</div>

   

<Weatherforecast  city={cityName} coordinates={coordinates}/>




     </div>
     </div>

  );



 }

}

export default App;
