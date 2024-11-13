# Weather API

This application includes an API endpoint for retrieving weather data based on filters such as city name, minimum temperature, and maximum temperature.

## Features
1. Implement weather filters (city name, min/max temperature range)
2. Reduce unneccessary api calls

## How To run the project
[Backend]
  Step 0: go to [Backend] folder
  Step 1: run script `npm install`
  Step 2: run script `npm start` or `node server.js`
  --> server will run on port 3001
[Frontend]
  Step 0: go to [weather-app] folder
  Step 1: run script `npm install`
  Step 2: run script `npm start`
  --> frontend will run on port 3000
  
## Endpoint

**GET** `/api/weather`

## Query Parameters

- `search` (string): Optional. Filters results to cities containing this text in their name.
- `minTemp` (number): Optional. Specifies the minimum temperature to include in the results.
- `maxTemp` (number): Optional. Specifies the maximum temperature to include in the results.
