function Forecast({className}) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1000px] p-8 mx-auto text-white">
        <div className="bg-blue-800 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-lg">+22°C</p>
          <p className="text-sm">16 May, Tue</p>
        </div>
        <div className="bg-blue-800 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-lg">+20°C</p>
          <p className="text-sm">17 May, Wed</p>
        </div>
        <div className="bg-blue-800 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-lg">+25°C</p>
          <p className="text-sm">18 May, Thu</p>
        </div>



        
      </section>
    )
}

export default Forecast;