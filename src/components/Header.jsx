import GetWeatherData from "../functions/GetWeatherData";
import React, { useState } from 'react';

function Header({darkMode, setDarkMode, fetchWeather}) {

    const [searchCity, setSearchCity] = useState("");

    const handleSearch = () => {
        if (searchCity.trim() !== "") { // trims the search input
          fetchWeather(searchCity); 
          setSearchCity(""); // clears the input and keeps the ui clean
        }
      };

return (
    <header className="bg-gray-400 w-full flex justify-between items-center px-6 py-4 shadow-md">
    <h1 className="text-2xl font-semibold text-white">Weather Dashboard</h1>

    <input
          type="text"
          placeholder="Search city or postcode"
          className="bg-blue-800 focus:w-[300px] dark:bg-gray-800 p-2 rounded-lg focus:outline-none text-white"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />

    <button 
    className="bg-blue-800  dark:bg-gray-800 p-2 rounded-lg focus:outline-none text-white" 
    onClick={handleSearch}
    >Search
    </button>


    {/* Dark Mode Toggle Button */}
    <button
      className="px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-black rounded-lg transition-all duration-200"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  </header>


)
   
}

export default Header;


