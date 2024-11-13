// server.js

const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

const port = 3001;

// Mock data array
const mockWeatherData = [
    { id: '0', city: "New York", temperature: "15", description: "Cloudy" },
    { id: '1', city: "Los Angeles", temperature: "22", description: "Sunny" },
    { id: '2', city: "Chicago", temperature: "10", description: "Windy" },
    { id: '3', city: "Houston", temperature: "25", description: "Hot" },
    { id: '4', city: "Phoenix", temperature: "30", description: "Very Hot" },
    { id: '5', city: "New York", temperature: "22", description: "Sunny" },
    { id: '6', city: "Los Angeles", temperature: "25", description: "Cloudy" },
    { id: '7', city: "Chicago", temperature: "18", description: "Rainy" },
    { id: '8', city: "Chicago", temperature: "19", description: "Overcast" },
    { id: '9', city: "Houston", temperature: "30", description: "Sunny" },
    { id: '10', city: "Phoenix", temperature: "35", description: "Hot" },
    { id: '11', city: "Philadelphia", temperature: "20", description: "Partly Cloudy" },
    { id: '12', city: "San Antonio", temperature: "28", description: "Humid" },
    { id: '13', city: "San Diego", temperature: "24", description: "Breezy" },
    { id: '14', city: "Dallas", temperature: "27", description: "Sunny" },
    { id: '15', city: "Austin", temperature: "29", description: "Warm" },
    { id: '16', city: "Austin", temperature: "28", description: "Cloudy" },
    { id: '17', city: "San Jose", temperature: "26", description: "Clear" },
    { id: '18', city: "Fort Worth", temperature: "27", description: "Windy" },
    { id: '19', city: "Jacksonville", temperature: "21", description: "Rainy" },
    { id: '20', city: "Columbus", temperature: "22", description: "Partly Cloudy" },
    { id: '21', city: "Charlotte", temperature: "23", description: "Sunny" },
    { id: '22', city: "San Francisco", temperature: "18", description: "Foggy" },
    { id: '23', city: "Indianapolis", temperature: "19", description: "Cloudy" },
    { id: '24', city: "Seattle", temperature: "17", description: "Rainy" },
    { id: '25', city: "Denver", temperature: "20", description: "Snowy" },
    { id: '26', city: "Washington", temperature: "22", description: "Clear" },
    { id: '27', city: "Boston", temperature: "16", description: "Chilly" },
    { id: '28', city: "El Paso", temperature: "28", description: "Sunny" },
    { id: '29', city: "Nashville", temperature: "24", description: "Humid" },
    { id: '30', city: "Detroit", temperature: "18", description: "Partly Cloudy" },
    { id: '31', city: "Oklahoma City", temperature: "25", description: "Windy" },
    { id: '32', city: "Portland", temperature: "19", description: "Foggy" },
    { id: '33', city: "Las Vegas", temperature: "35", description: "Hot" },
    { id: '34', city: "Louisville", temperature: "21", description: "Rainy" },
    { id: '35', city: "Memphis", temperature: "26", description: "Sunny" },
    { id: '36', city: "Baltimore", temperature: "20", description: "Clear" },
    { id: '37', city: "Milwaukee", temperature: "18", description: "Cloudy" },
    { id: '38', city: "Albuquerque", temperature: "28", description: "Dry" },
    { id: '39', city: "Tucson", temperature: "32", description: "Hot" },
    { id: '40', city: "Fresno", temperature: "27", description: "Sunny" },
    { id: '41', city: "Mesa", temperature: "30", description: "Humid" },
    { id: '42', city: "Sacramento", temperature: "23", description: "Clear" }
];

// GET route to return filtered weather data based on query params
app.get('/api/weather', (req, res) => {
    console.log({ req })
    const { search = '', minTemp = -100, maxTemp = 100 } = req.query;

    // Convert minTemp and maxTemp to numbers for comparison
    const minTempNumber = parseInt(minTemp);
    const maxTempNumber = parseInt(maxTemp);

    // Filter the data
    const filteredData = mockWeatherData.filter(item => {
        const matchesCity = item.city.toLowerCase().includes(search.toLowerCase());
        const matchesTempRange = item.temperature >= minTempNumber && item.temperature <= maxTempNumber;
        return matchesCity && matchesTempRange;
    });

    res.json(filteredData);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});