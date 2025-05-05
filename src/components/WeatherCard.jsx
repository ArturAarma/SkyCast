import React from "react";

const WeatherCard = ({ weatherData }) => {

  console.log("WeatherCard", weatherData);
  // preloaded cities and cities that you can search
  return (
    <div className="flex flex-wrap px-5 justify-evenly ">
      
      {weatherData.map((data) => (

        <div key={data.city} className="animate-softPulse bg-gradient-to-bl from-sky-600 via-blue-600 to-indigo-600 dark:via-slate-900 dark:from-sky-900 dark:to-indigo-950  rounded-xl p-6 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border-2 border-white text-white w-[350px]">
          <h2 className="text-3xl font-semibold">{data ? data.city : "no info"}</h2>
          <p className="text-3xl font-bold mt-2">{data ? Math.round(data.temperature) : "No info"}°C</p>
          <p className="text-lg font-semibold">Humidity: {data ? data.humidity : "No info"}% | Wind: {data.wind ? data.wind : "No info"} km/h</p>
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
