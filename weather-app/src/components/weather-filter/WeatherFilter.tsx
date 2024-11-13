import React, { useState } from 'react';

import { MAX_TEMPERATURE, MIN_TEMPERATURE } from '../../constant';
import { Filter } from '../../type/filter';
import './WeatherFilter.css'


interface WeatherFilterProps {
    onFilter: (data: Filter) => void;
}

const WeatherFilter: React.FC<WeatherFilterProps> = ({ onFilter }) => {
    const [city, setCity] = useState('');
    const [maxTemperature, setMaxTemperature] = useState('0');
    const [minTemperature, setMinTemperature] = useState('0');

    const handleSearch = () => {
        onFilter({
            search: city.trim(),
            maxTemperature,
            minTemperature
        });

    };

    const clearFilter = () => {
        setCity('');
        setMaxTemperature('0');
        setMinTemperature('0');
    }

    return (
        <div className='WeatherFilter'>
            <input
                className='WeartherFilter__search'
                type="text"
                placeholder="Search city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <div className="WeartherFilter__range-input">
                <div>
                    <label>Max Temperature: {maxTemperature}°C</label>
                    <input
                        type="range"
                        min={MIN_TEMPERATURE}
                        max={MAX_TEMPERATURE}
                        value={maxTemperature}
                        onChange={(e) => setMaxTemperature(e.target.value)}
                    />
                </div>
                <div>
                    <label>Min Temperature: {minTemperature}°C</label>
                    <input
                        type="range"
                        min={MIN_TEMPERATURE}
                        max={MAX_TEMPERATURE}
                        value={minTemperature}
                        onChange={(e) => setMinTemperature(e.target.value)}
                    />
                </div>
            </div>
            <div className='WeartherFilter__filter-actions'>
                <button className='WeartherFilter__filter-btn' onClick={handleSearch}>Filter</button>
                <button className='WeartherFilter__filter-btn' onClick={clearFilter}>Clear</button>
            </div>
        </div>
    );
};

export default WeatherFilter;
