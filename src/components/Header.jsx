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
    <header className="bg-gray-400 dark:bg-gray-800 w-full flex justify-between items-center px-6 py-4 shadow-md">
    <h1 className="text-2xl font-semibold text-white">Weather Dashboard</h1>
    <div>
      <Search fetchWeather={fetchWeather} />
    </div>
    
    
    
   
    


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


