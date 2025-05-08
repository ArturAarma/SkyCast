

import GetWeatherData from "../functions/GetWeatherData";
import React, { useState } from 'react';

function Search({darkMode, setDarkMode, fetchWeather}) {

    const [searchCity, setSearchCity] = useState("");

    const handleSearch = () => {
        if (searchCity.trim() !== "") { // trims the search input
          fetchWeather(searchCity); 
          setSearchCity(""); // clears the input and keeps the ui clean
        }
      };

return (
    
    <div className="flex justify-center">
        
        <div className="flex items-center space-x-2">
                <input
                type="text"
                placeholder="Search city"
                className="w-[200px] md:w-[200px] focus:md:w-[300px] 
                p-2 rounded-lg text-white placeholder-white/80 bg-gradient-to-bl 
                from-sky-400 via-blue-500 to-indigo-500 dark:via-slate-800 dark:from-sky-900 
                dark:to-indigo-950 focus:outline-none animate-hueRotateSubtle transition-all duration-300 border-2 border-white"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                />

            <button 
            className="animate-softPulse bg-gradient-to-l from-sky-600 via-blue-500 to-indigo-500 
               dark:from-sky-900 dark:via-slate-800 dark:to-indigo-950 
               hover:to-indigo-700 transition-transform transform active:scale-110 
               duration-300 text-white px-4 py-2 rounded-lg border-2 border-white" 
            onClick={handleSearch}
            >Search
            </button>
        </div>

    </div>
    


    


)
   
}

export default Search;


