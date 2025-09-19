import { writable } from "svelte/store";
    
const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=45.8795&longitude=170.5006&hourly=temperature_2m&timezone=Pacific%2FAuckland&forecast_days=1";

export const weatherData1Day = writable(
    {  
        "loaded": false,
        "hourly": {
            "temperature_2m": [],
            "time": []
        }
    }
);

/**
 * @param {string | URL | Request} url
 */
export async function LoadWeatherData(url = apiURL) {
    let reponse = await fetch(url);
    let weatherData = await reponse.json()
        .catch(err => console.error('Error fetching data:', err));
    
    weatherData1Day.set({
        "loaded": true,
        "hourly": {
            "temperature_2m": weatherData.hourly.temperature_2m,
            "time": weatherData.hourly.time
        }
    });
}