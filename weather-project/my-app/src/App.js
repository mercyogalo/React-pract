import React , {useState} from "react"
import axios from 'axios';
import './App.css';

function App() {

let [city, setCity]=useState(" ");
let [loader,setLoader]=useState(false);
let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [description, setDescription] = useState("");
  let [wind, setWind] = useState("");
  let [image, setImage] = useState("");
  let [date, setDate] = useState("")

  function handleForm(e){
    e.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72bb9dab46b9ec3d65f423c63f27a9b8&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

function displayTemperature(response){
  console.log(response.data);
  Math.round(setHumidity(response.data.main.humidity));
  Math.round(setWind(response.data.wind.speed));
  setDescription(response.data.weather[0].description);
  setImage(response.data.weather[0].icon);
  setDate(new Date(response.data.dt*1000));
  Math.round(setTemperature(response.data.main.temp));
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
    <div className="weather-app-section">
    <div className="row ">
   

    <div className="col-sm-12">
    {form}
    </div>


   <div className="col-sm-5">
   <ul>
            <li>Humidity: {humidity}%</li>
            <li>Wind Speed: {wind} m/s</li>
            <li>Description: {description}</li>
            <li>Date: {setDate}</li>
          
        </ul>
   
        {image && (<img
                  src={`http://openweathermap.org/img/wn/${image}@2x.png`}
                  alt="Weather icon"
                />
              )}

      
   </div>

   <div className="col-sm-4 temperature-section">
        
   <p>{temperature}<sup>°</sup></p>
          
</div>

  <div className="col-sm-10 forecast-section">
<h2>Forecast</h2>
  </div>

   
    </div>
</div>
  );

 }
 else{
  return (
    <div className=" weather-app-section">
       <div className="row ">

       <div className="col-sm-12">
    {form}
    </div>

     </div>
     </div>

  );

 }

}

export default App;
