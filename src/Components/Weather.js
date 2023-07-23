import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

// const API = process.env.REACT_APP_WEATHER_KEY;
const BASE_URL = "http://api.weatherapi.com/v1/current.json?key=";

function Weather() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}242f7659d21c4660a75164724232307&q=New York&aqi=no`)
      .then((response) => {
        // console.log(response.data);
        setWeather(response.data);
    });
}, []);

if (!weather.location) {
    // If weather.location is not available yet, render a loading message or return null
    return <div>Loading...</div>;
  }

console.log(weather.location.name)
return (
    <div className="weather">
      
       
      <div className="weather-info">
        <h1>{weather.location.name}</h1>
        
        <h2>{weather.location.country}</h2>
        <h2>Local time: {weather.location.localtime}</h2>
        <h2>Current Temp: {weather.current.temp_f}</h2>
        
        <h2>Current condition: {weather.current.condition.text}</h2>
        <img src={weather.current.condition.icon} alt="" />
      </div>
      
    </div>
  );
}

export default Weather;
