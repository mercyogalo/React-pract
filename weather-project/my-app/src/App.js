import React , {useState} from "react"
import axios from 'axios';
import './App.css';

function App() {

let [city, setCity]=useState(" ");
let [loader,setLoader]=useState("");

  function handleForm(e){
    e.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72bb9dab46b9ec3d65f423c63f27a9b8&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

function displayTemperature(response){
  console.log(response.data);
  return  setLoader(response);
}


  function handleCity(e){
    return setCity(e.target.value);
  }






  let form=(
    <form className="form" onSubmit={handleForm}>
    <input type="text" placeholder="Enter a city" onChange={handleCity}/>
    <input type="submit"  value="Search" className="submit-btn"/>
  </form>
  )
 if (loader) {
  return (
    <div className="App">
    {form}
    <h2>Searching for {city}</h2>
    </div>
  );
 }
 else{
  return (
    <div className="App">
    {form}
    </div>
  );

 }

}

export default App;
