// src/components/WeatherDisplay.tsx

import React from 'react';

import { WeatherData } from '../../api/weatherApi';
import './WeatherDisplay.css';

interface WeatherDisplayProps {
    data: WeatherData[];
    isLoading: boolean;
    error: string | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data, isLoading, error }) => {
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!data || data.length === 0) {
        return <p>No available record</p>;
    }

    return (
        <div className='container'>
            {data.map((weather, index) => (
                <div key={index} className='card'>
                    <h2>{weather.city}</h2>
                    <p>Temperature: {weather.temperature}°C</p>
                    <p>Condition: {weather.description}</p>
                </div>
            ))}
        </div>
    );
};

export default WeatherDisplay;
