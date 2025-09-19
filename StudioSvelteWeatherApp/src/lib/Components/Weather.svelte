<script>
    const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=45.8795&longitude=170.5006&hourly=temperature_2m&timezone=Pacific%2FAuckland&forecast_days=1";


	/**
	 * @param {string | URL | Request} url
	 */
    async function LoadWeatherData(url) {
        let reponse = await fetch(url);
        let weatherData = await reponse.json()
            .catch(err => console.error('Error fetching data:', err));
        return weatherData;
    }
    export const weatherData1Day = LoadWeatherData(apiURL);
</script>