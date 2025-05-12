import GetWeatherData from "../functions/GetWeatherData";
import React, { useState } from 'react';
import Search from "./Search";

function Header({darkMode, setDarkMode, fetchWeather}) {

    const [searchCity, setSearchCity] = useState("");

    const handleSearch = () => {
        if (searchCity.trim() !== "") { // trims the search input
          fetchWeather(searchCity); 
          setSearchCity(""); // clears the input and keeps the ui clean
        }
      };

return (
    <header className="bg-blue-700 dark:bg-gray-800 w-full flex justify-between items-center px-6 py-4 shadow-md">
    <h1 className="text-2xl font-semibold text-white">Weather Dashboard</h1>
    <div>
      <Search fetchWeather={fetchWeather} />
    </div>
    
    
    
   
    


    {/* Dark Mode Toggle Button */}
    <button
      className="px-4 py-2 text-sm font-medium text-balack bg-white dark:bg-gray-900 dark:text-white rounded-lg transition-all duration-200 border-2 border-white"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  </header>


)
   
}

export default Header;


