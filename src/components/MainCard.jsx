import React from "react";

const MainCard = ({ weatherData }) => {
  console.log("WeatherCard", weatherData);

  return (
    <div className="flex flex-wrap px-5 justify-evenly">
      {weatherData.map((data) => (
        <div
          key={data.city}
          className="bg-blue-800 dark:bg-gray-800 text-white p-6 rounded-xl shadow-lg w-[270px] mb-6"
        >
          <h2 className="text-2xl font-extrabold tracking-tight drop-shadow-md">
            {data ? data.city : "no info"}
          </h2>
          <p className="text-4xl font-bold mt-2 drop-shadow">
            {data ? Math.round(data.temperature) : "No info"}°C
          </p>
          <p className="text-lg font-extrabold mt-2 text-white/90 tracking-tight">
            Humidity: {data ? data.humidity : "No info"}% | Wind:{" "}
            {data.wind ? data.wind : "No info"} km/h
          </p>
        </div>
      ))}
    </div>
  );
};

export default MainCard;
