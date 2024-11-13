import React, { useEffect, useRef, useState } from 'react';

import { fetchWeatherData, WeatherData } from '../api/weatherApi';
import WeatherDisplay from '../components/weather-display/WeatherDisplay';
import WeatherFilter from '../components/weather-filter/WeatherFilter';
import { Filter } from '../type/filter';

const WeatherPage: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const controllerRef = useRef<AbortController | null>(null);

    const handleFilter = async (payload: Filter) => {
        try {
            setIsLoading(true);
            setError(null);

            if (controllerRef.current) {
                controllerRef.current.abort();
            }

            controllerRef.current = new AbortController();
            const signal = controllerRef.current.signal;
            const data = await fetchWeatherData(payload, signal);
            if (data) {
                setWeatherData(data);
            } else {
                setError('Failed to fetch data');
            }
            setIsLoading(false);
        }
        catch (error) { }

    };

    // Cleanup on component unmount
    useEffect(() => {
        return () => controllerRef.current?.abort();
    }, []);

    return (
        <div>
            <h1>Weather App</h1>
            <WeatherFilter onFilter={handleFilter} />
            <WeatherDisplay data={weatherData} isLoading={isLoading} error={error} />
        </div>
    );
};

export default WeatherPage;
