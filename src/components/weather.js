import React, { useState, useContext } from "react";
import WeatherDisplay from "../weatherDisplay";
import useWeatherData from "../useWeatherData";
import useLocalStorage from "../useLocalStorage";
import { WeatherContext } from "../WeatherContext";

function Weather() {
    const [city, setCity] = useState("");
    const [storedCity, setStoredCity] = useLocalStorage("lastCity", "");
    const fetchWeatherData = useWeatherData();

    const { setWeatherData } = useContext(WeatherContext);

    const handleSearch = async () => {
        const apiKey = "5b55bd0a90dbbb2772f3d676ac08622c";
        const data = await fetchWeatherData(city, apiKey);
        if (data) {
            console.log(data);
            setWeatherData(data);
            setStoredCity(city);
        }
    };

    return (
        <div className="app container text-center mt-5">
            <h1>Weather App</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <WeatherDisplay />
        </div>
    );
}

export default Weather;
