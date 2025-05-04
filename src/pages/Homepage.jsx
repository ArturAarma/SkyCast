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
const preloadedCities = ["Tallinn", "Berlin", "Paris", "Lissabon"];

function Homepage() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [weather, setWeather] = useState(null);
  const [weatherData, setWeatherData] = useState([]);

  // Fetching preloaded cities
  useEffect(() => {
    const fetchPreloadedCities = async () => {
      const results = await Promise.all(
        preloadedCities.map(async (city) => {
          const data = await GetWeatherData(city);
          return data
            ? {
                city: data.name,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                wind: data.wind.speed,
              }
            : null;
        })
      );
      setWeatherData(results.filter((city) => city !== null));
    };

    fetchPreloadedCities();
  }, []);

  const fetchWeather = async (city) => {
    if (!city) return;

    const data = await GetWeatherData(city);

    if (data && data.main) {
      const formattedWeather = {
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      };
      setWeather(formattedWeather);
    } else {
      console.error("Weather data is missing expected properties:", data);
      setWeather(null);
    }
  };

  return (
    <div className={`min-h-screen min-w-screen max-w-screen bg-gray-200 dark:bg-gray-900`}>
    
    
    {/* Header */}
    <div>
      
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        fetchWeather={fetchWeather}
      />
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

{/* Overview Section */}
<div className="w-full flex justify-center py-10 px-4">
  <div className="w-full max-w-2xl px-6 py-6 bg-green-600 dark:bg-gray-800 rounded-3xl flex items-center justify-center">
    <Search />
  </div>
</div>

</div>

  );
}

export default Homepage;
