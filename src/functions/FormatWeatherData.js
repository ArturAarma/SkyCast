// This function formats the weather data fetched from the API into the desired structure
const formatWeatherData = (data) => {
    return {
        city: data.city.name,
        temperature: Math.round(data.list[0].main.temp), // current temp from the first 3-hour interval
        minTemp: Math.round(data.list[0].main.temp_min),
        maxTemp: Math.round(data.list[0].main.temp_max),
        feelsLike: Math.round(data.list[0].main.feels_like),
        humidity: Math.round(data.list[0].main.humidity),
        wind: data.list[0].wind.speed, // current wind speed from the first 3-hour interval
    };
};

export default formatWeatherData;
