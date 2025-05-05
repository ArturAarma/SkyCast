



const cityName = 'Tallinn'
const apikey = process.env.REACT_APP_WEATHER_API_KEY; 




// fetches data
async function GetWeatherData(cityName) {

    
    console.log("API Key:", process.env.REACT_APP_WEATHER_API_KEY);

  
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apikey}&units=metric`);

    if (!response.ok) {
        throw new Error('Something went wrong fetching the API')
    }

    const data = await response.json();
    console.log(data)

    
    return (
        data
    )
        


    
} catch (error) {
    console.log('Error:', error)
}
    
}
   


export default GetWeatherData;