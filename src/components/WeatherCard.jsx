import React from "react";

const WeatherCard = ({ weatherData }) => {

  console.log("WeatherCard", weatherData);
  // preloaded cities and cities that you can search
  return (
    <div>
      {/* 
        if data is true then render same div, so if something is searched then it renders the div for the searched city
        */}
      {weatherData.map((data, index) => (

        <div className="bg-blue-800 dark:bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full mb-6">
          <h2 className="text-xl font-semibold">{data ? data.city : "no info"}</h2>
          <p className="text-3xl">{data ? Math.round(data.temperature) : "No info"}°C</p>
          <p className="text-sm">Humidity: {data ? data.humidity : "No info"}% | Wind: {weatherData[0] ? weatherData[0].wind : "No info"} km/h</p>
        </div>

      ))}






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
