import React, { useState, useEffect } from "react";
import "./App.css";
import BoxCity from "./BoxCity.js";

function App() {
  const [cities] = useState([
    { name: "Toronto", id: 1 },
    { name: "New York", id: 2 },
    { name: "London", id: 3 },
    { name: "Paris", id: 4 },
    { name: "Tokyo", id: 5 },
    { name: "Sydney", id: 6 },
    { name: "Beijing", id: 7 },
    { name: "Rio de Janeiro", id: 8 },
    { name: "Moscow", id: 9 },
    { name: "Seoul", id: 10 }
  ]); //An array object representing the available cities
  const [selectedCity, setSelectedCity] = useState(""); //A string representing the currently selected city
  const [weatherData, setWeatherData] = useState(null); //An Object representing the weather data for the selected city
  const API_KEY = "815c10d8ffcb9f3b7bcb7ac9d952dd6f";

  useEffect(() => {
    if (!selectedCity) return;

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, [selectedCity, API_KEY]);

  const handleSelectCity = (cityName) => {
    setSelectedCity(cityName);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="city-boxes">
        {cities.map((city) => (
          <BoxCity
            key={city.id}
            cityName={city.name}
            isSelected={selectedCity === city.name}
            onSelectCity={handleSelectCity}
          />
        ))}
      </div>
      {weatherData && (
        <div className="weather-info">
          <h2>{selectedCity} Weather</h2>
          <p>Current Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;

