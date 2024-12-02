import { useCallback } from 'react';

const useWeatherData = () =>{

    const fetchWeatherData = useCallback(async (city, apiKey) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            if (!response.ok) throw new Error("City not found");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }, []);

    return fetchWeatherData;
}

export default useWeatherData;