import React, { useMemo } from "react";
import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

const WeatherDisplay = () => {
    const { weatherData } = useContext(WeatherContext);

    const displayData = useMemo(() => {
        if (!weatherData) return null;
        const { name, main, weather } = weatherData;
        return {
            city: name,
            temperature: main.temp,
            description: weather[0].description,
            icon: weather[0].icon,
        };
    }, [weatherData]);

    if (!displayData) return <p>No weather data available.</p>;

    return (
        <div className="weather-display text-center">
            <h2>{displayData.city}</h2>
            <img
                src={`http://openweathermap.org/img/wn/${displayData.icon}.png`}
                alt={displayData.description}
            />
            <p>{displayData.description}</p>
            <h3>{displayData.temperature}°C</h3>
        </div>
    );
};

export default WeatherDisplay;
