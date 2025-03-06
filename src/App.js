import React, { useContext } from "react";
import Forecast from "./components/Forecast";
import WeatherCard from "./components/WeatherCard";
import { DarkModeContext } from "./components/DarkModeContext";
import Overview from "./components/Overview";

function App() {

  const {darkMode, setDarkMode} = useContext(DarkModeContext);

  return (
    <div className={`min-h-screen bg-gray-200  dark:bg-gray-900 `}>
      {/* Header */}
      <header className="bg-gray-400 w-full flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="text-2xl font-semibold text-white">Weather Dashboard</h1>

        <input
          type="text"
          placeholder="Search city or postcode"
          className="bg-blue-800 focus:w-[300px] dark:bg-gray-800 p-2 rounded-lg focus:outline-none text-white"
        />


        {/* Dark Mode Toggle Button */}
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-black rounded-lg transition-all duration-200"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Main Weather Card */}
      <div className="px-6 py-6">
        <WeatherCard />
      </div>

      {/* Overview Section */}
      <div>
        <Overview />
      </div>

      {/* Forecast Section */}
      <div >
        <Forecast/>
      </div>


    </div>
  );
}

export default App;
