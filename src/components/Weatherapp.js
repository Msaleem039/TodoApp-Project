import React, { useState } from 'react';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const apiKey = '82f11a386dbd6297acd72696f3ed8187';

    const currentDate = new Date();
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    const formattedDate = `${date} ${month} ${year}`;

    const getWeather = async () => {
        try {
            const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            setWeatherData(data);
            setError(''); // Clear any previous errors
        } catch (error) {
            console.error(error);
            setError(error.message);
            setWeatherData(null); // Clear previous weather data
        }
    }

    return (
        <div className='container'>
            <h1>Weather App</h1>
            <p>Current date: {formattedDate}</p>
            <input 
                type='text' 
                placeholder='Enter city name' 
                onChange={(e) => setCity(e.target.value)} 
                value={city}
            />
            <button onClick={getWeather}>Get Weather</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weatherData && (
                <div>
                    <h2>{weatherData.name}, {weatherData.sys?.country}</h2>
                    <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default WeatherApp;
