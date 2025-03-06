import React from "react";

const WeatherCard = () => {
  return (
    <div>
    

        <div className="bg-blue-800 dark:bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full mb-6">
            <h2 className="text-xl font-semibold">Berlin</h2>
            <p className="text-3xl">+20°C</p>
            <p className="text-sm">Humidity: 24% | Wind: 13 km/h</p>
        </div>

        <div>
            <div className="bg-blue-800 dark:bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full mb-6">
            <h2 className="text-xl font-semibold">Rapla</h2>
            <p className="text-3xl">+20°C</p>
            <p className="text-x">Humidity: 24% | Wind: 13 km/h</p>
            </div>
        </div>



    </div>
  );
};

export default WeatherCard;
