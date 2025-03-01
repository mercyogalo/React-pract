import React, { useState , useEffect } from "react";
import css from "./App.css";
import axios from "axios";
import WeatherforecastDay from "./WeatherforecastDay";




export default function Weatherforecast(props){
    let [loaded,setLoaded]=useState(false);
    let [forecast,setForecast]=useState(null);
    let [prevCoordinates, setPrevCoordinates] = useState(null);


  
    useEffect(() => {
        if (!props.coordinates) return; // Ensure coordinates are available

        // Prevent repeated API calls if the coordinates haven't changed
        if (
            prevCoordinates &&
            prevCoordinates.lat === props.coordinates.lat &&
            prevCoordinates.lon === props.coordinates.lon
        ) {
            return;
        }

        setLoaded(false);
        setPrevCoordinates(props.coordinates); // Store current coordinates

        let apiKey = `tba3e25ffd38f7e512a5944489457o05`;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&key=${apiKey}`;

        axios.get(apiUrl)
            .then((response) => {
                if (response.data.daily) {
                    setForecast(response.data.daily);
                    setLoaded(true);
                } else {
                    console.error("No daily forecast data received");
                }
            })
            .catch((error) => {
                console.error("Error fetching forecast:", error);
            });

    }, [props.coordinates, prevCoordinates]);




if (loaded && forecast && forecast.length > 0) {
    return (
        <div className="Weatherforecast container">  
         <div className="row  forecast-section">  

{forecast.map(function(dailyForecast,index){
 if (index < 5) {
    return (
          <div className="col-md-2 " key={index}>
            <div className="eachSection">
        <WeatherforecastDay forecast={dailyForecast} />
        </div>
        </div>
      
    );

}

})


}
   


</div>
</div>



    );


}
else{
return (
    <div className="sweet-loading">
  loading...
    </div>
);


}




  
}