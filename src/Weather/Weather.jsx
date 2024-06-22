import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = 'a3200aebed594c9386706a16806c9a6f'; // Замените на свой API ключ

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                    `https://api.openweathermap.org/data/2.5/weather?id=625144&appid=${API_KEY}&units=metric`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather();
    }, [city, API_KEY]);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { main, weather } = weatherData;

    return (
        <div className="weather">
            <h2>Weather in {city}</h2>
            <div>
                <p>Temperature: {main.temp} °C</p>
                <p>Description: {weather[0].description}</p>
            </div>
        </div>
    );
};

export default Weather;
