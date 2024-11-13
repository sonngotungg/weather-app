# Weather API

This application includes an API endpoint for retrieving weather data based on filters such as city name, minimum temperature, and maximum temperature.

## Features
1. Implement weather filters (city name, min/max temperature range)
2. Reduce unneccessary api calls


## Endpoint

**GET** `/api/weather`

## Query Parameters

- `search` (string): Optional. Filters results to cities containing this text in their name.
- `minTemp` (number): Optional. Specifies the minimum temperature to include in the results.
- `maxTemp` (number): Optional. Specifies the maximum temperature to include in the results.
