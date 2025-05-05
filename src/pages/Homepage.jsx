import React, { useContext, useState, useEffect } from "react";
import Forecast from "../components/Forecast";
import WeatherCard from "../components/WeatherCard";
import { DarkModeContext } from "../components/DarkModeContext";
import Overview from "../components/Overview";
import Header from "../components/Header";
import GetWeatherData from "../functions/GetWeatherData";
import Search from "../components/Search";
import { Link } from "react-router-dom";

// Cities to load on opening the site
//const preloadedCities = ["Tallinn", "Berlin", "Paris", "Lissabon"];

function Homepage() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [weather, setWeather] = useState(null);
  

 

  return (
    <div className={`min-h-screen min-w-screen max-w-screen bg-gray-200 dark:bg-gray-900`}>
    
    
    {/* Header */}
    <div>
      
      
    </div>

      {/* Hero Section */}
<div className="w-full flex justify-center max-w-screen py-10">
  <div className="w-full max-w-screen px-6 py-10 bg-green-600 dark:bg-gray-800  text-center">
    <h1 className="text-4xl sm:text-6xl font-bold text-gray-100">
      Welcome to SkyCast
    </h1>
    <p className="mt-6 text-lg text-gray-100">
      All your weather reports in one place!
    </p>
    <div className="mt-8 flex justify-center gap-6">
    <Link reloadDocument to="/CityForecast" className="bg-green-800 transition-all duration-300 w-[100px] md:w-[250] focus:md:w-[130px] dark:bg-gray-900 p-2 rounded-lg focus:outline-none text-white">
        Try now!
      </Link>
      <a href="#" className="text-white font-semibold">
        Learn more →
      </a>
    </div>
  </div>
</div>


</div>

  );
}

export default Homepage;
