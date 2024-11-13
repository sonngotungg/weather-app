import { Filter } from "../type/filter";

export interface WeatherData {
    id: string,
    city: string;
    temperature: string;
    description: string;
}

// const mockWeatherData: WeatherData[] = [
//     { id: '0', city: "New York", temperature: "15", description: "Cloudy" },
//     { id: '1', city: "Los Angeles", temperature: "22", description: "Sunny" },
//     { id: '2', city: "Chicago", temperature: "10", description: "Windy" },
//     { id: '3', city: "Houston", temperature: "25", description: "Hot" },
//     { id: '4', city: "Phoenix", temperature: "30", description: "Very Hot" },
//     { id: '5', city: "New York", temperature: "22", description: "Sunny" },
//     { id: '6', city: "Los Angeles", temperature: "25", description: "Cloudy" },
//     { id: '7', city: "Chicago", temperature: "18", description: "Rainy" },
//     { id: '8', city: "Chicago", temperature: "19", description: "Overcast" },
// ];

// export const mockfetchWeatherData = (city: string, signal:): Promise<WeatherData[]> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data = mockWeatherData.filter(
//                 (item) => item.city.toLowerCase().includes(city.toLowerCase())
//             );
//             resolve(data || []);
//         }, 1000); // Simulates a 1-second API delay
//     });
// };

export const fetchWeatherData = async (payload: Filter, signal?: AbortSignal): Promise<WeatherData[]> => {
    try {
        const { search, maxTemperature, minTemperature } = payload
        const response = await fetch(`http://localhost:3001/api/weather?search=${search}&minTemp=${minTemperature}&maxTemp=${maxTemperature}`, { signal });
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        return data
    } catch (error: any) {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error('Error fetching data:', error);
        }
        throw error;
    }
};
