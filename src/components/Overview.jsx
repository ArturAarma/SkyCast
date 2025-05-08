
/*
import React from "react";

function Overview({ weather }) {
    return (
        <section className="bg-blue-800 dark:bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full max-w-[1000px] mx-auto mb-6">
          <div className="text-5xl font-semibold flex max-w-[1000px] min-h-[400px] justify-center">
            {weather ? weather.city : "Loading..."}
          </div>
        <h3 className="text-lg font-semibold">Overview</h3>
        <div className="mt-4">
          <p>Humidity Trends</p>
          <div className="h-32 bg-gray-300 rounded-lg"></div>
        </div>
      </section>
    )

}
  */



import React from "react";

function Overview({ weather }) {


  if (!weather) {
    return (
      <section className="max-w-5xl mx-auto p-8 bg-blue-800 dark:bg-gray-800 text-white rounded-xl shadow-lg  text-center">
        <div className="text-3xl font-bold animate-pulse">Loading weather data...</div>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto p-8">
  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-300 text-white">
    
    {/* Pulsing Background */}
    <div className="absolute inset-0 animate-hueRotateSubtle  ease-in-out bg-gradient-to-bl from-sky-400 via-blue-500 to-indigo-900 dark:via-slate-800 dark:from-sky-900 dark:to-indigo-950 z-0" />

    {/* Foreground Content */}
    <div className="relative backdrop-blur-lg p-8 space-y-8 z-10">
      {/* City Name */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
          {weather.city}
        </h1>
        <p className="text-base font-semibold text-white/80 mt-1">Live weather overview</p>
      </div>

      {/* Weather Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {[
          { label: "Temperature", value: `${weather.temperature}°C` },
          { label: "Feels Like", value: `${weather.feelsLike}°C` },
          { label: "Humidity", value: `${weather.humidity}%` },
          { label: "Min Temp", value: `${weather.minTemp}°C` },
          { label: "Max Temp", value: `${weather.maxTemp}°C` },
          { label: "Wind Speed", value: `${weather.wind} m/s` },
        ].map((item, index) => (
          <div
            key={index}
            className="from-sky-600 via-blue-500 to-indigo-900 dark:via-slate-800 dark:from-sky-900 dark:to-indigo-950 transition-colors rounded-xl p-6 shadow-[inset_0_0_6px_rgba(0,0,0,0.2)] border-2 border-transparent"
          >
            <h4 className="text-lg font-semibold text-white/90">{item.label}</h4>
            <p className="text-3xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Humidity Trends */}

      {/*
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Humidity Trends</h3>
        <div className="h-32 rounded-xl bg-gradient-to-r from-sky-600 via-blue-500 to-indigo-500 opacity-80 shadow-inner" />
      </div>
      */}

    </div>
  </div>
</section>

  );
}

export default Overview;