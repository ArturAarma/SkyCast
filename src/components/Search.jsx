

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
    
    <div>
        
        <div className="flex items-center space-x-2">
                <input
                type="text"
                placeholder="Search city or postcode"
                className="bg-green-800 transition-all duration-300 w-[200px] md:w-[250] focus:md:w-[300px] dark:bg-gray-900 p-2 rounded-lg focus:outline-none text-white"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                />

            <button 
            className="bg-green-800 dark:bg-gray-900 dark:hover:bg-gray-950 text-white px-4 py-2 rounded-lg hover:bg-green-900 transition-transform transform active:scale-110 duration-300" 
            onClick={handleSearch}
            >Search
            </button>
        </div>

    </div>
    


    


)
   
}

export default Search;


