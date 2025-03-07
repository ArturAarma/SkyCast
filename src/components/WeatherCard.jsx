import React from "react";

const WeatherCard = ({weather, weatherData}) => {

  
// preloaded cities and cities that you can search
  return (
    <div>
    
       
        <div className="bg-blue-800 dark:bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full mb-6">
            <h2 className="text-xl font-semibold">{weatherData[0] ? weatherData[0].city : "no info"}</h2>
            <p className="text-3xl">{weatherData[0] ? weatherData[0].temperature : "No info"}°C</p>
            <p className="text-sm">Humidity: {weatherData[0] ? weatherData[0].humidity : "No info"}% | Wind: {weatherData[0] ? weatherData[0].wind : "No info"} km/h</p>
        </div>

        <div className="bg-blue-800 dark:bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full mb-6">
            <h2 className="text-xl font-semibold">{weatherData[1] ? weatherData[1].city : "no info"}</h2>
            <p className="text-3xl">{weatherData[1] ? weatherData[1].temperature : "No info"}°C</p>
            <p className="text-sm">Humidity: {weatherData[1] ? weatherData[1].humidity : "No info"}% | Wind: {weatherData[1] ? weatherData[1].wind : "No info"} km/h</p>
        </div>

        <div className="bg-blue-800 dark:bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full mb-6">
            <h2 className="text-xl font-semibold">{weatherData[2] ? weatherData[2].city : "no info"}</h2>
            <p className="text-3xl">{weatherData[2] ? weatherData[2].temperature : "No info"}°C</p>
            <p className="text-sm">Humidity: {weatherData[2] ? weatherData[2].humidity : "No info"}% | Wind: {weatherData[2] ? weatherData[2].wind : "No info"} km/h</p>
        </div>

        <div className="bg-blue-800 dark:bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full mb-6">
            <h2 className="text-xl font-semibold">{weatherData[3] ? weatherData[3].city : "no info"}</h2>
            <p className="text-3xl">{weatherData[3] ? weatherData[3].temperature : "No info"}°C</p>
            <p className="text-sm">Humidity: {weatherData[3] ? weatherData[3].humidity : "No info"}% | Wind: {weatherData[3] ? weatherData[3].wind : "No info"} km/h</p>
        </div>

        
      {/* 
        <div>
            <div className="bg-blue-800 dark:bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full mb-6">
            <h2 className="text-xl font-semibold">{weather ? weather.city : "No info"}</h2>
            <p className="text-3xl">{weather ? weather.temperature : "No info"}°C</p>
            <p className="text-x">Humidity: {weather ? weather.humidity : "No info"}% | Wind:  km/h</p>
            </div>
        </div>

        */}



    </div>
  );
};

export default WeatherCard;
