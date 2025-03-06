import React from "react";

const WeatherCard = ({weather, weatherData}) => {

  
// preloaded cities and cities that you can search
  return (
    <div>
    
       
        <div className="bg-blue-800 dark:bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full mb-6">
            <h2 className="text-xl font-semibold">{weatherData[0] ? weatherData[0].city : "no info"}</h2>
            <p className="text-3xl">+20°C</p>
            <p className="text-sm">Humidity: 24% | Wind: 13 km/h</p>
        </div>

        <div>
            <div className="bg-blue-800 dark:bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full mb-6">
            <h2 className="text-xl font-semibold">{weather ? weather.city : "No info"}</h2>
            <p className="text-3xl">{weather ? weather.temperature : "No info"}°C</p>
            <p className="text-x">Humidity: {weather ? weather.humidity : "No info"}% | Wind:  km/h</p>
            </div>
        </div>

        



    </div>
  );
};

export default WeatherCard;
