<script>
    import { onMount } from "svelte";

    const apiURL =
        "https://api.open-meteo.com/v1/forecast?latitude=-45.8742&longitude=170.5036&hourly=temperature_2m,relative_humidity_2m&current=temperature_2m,relative_humidity_2m&timezone=Pacific%2FAuckland";

    let weatherData = null;
    let error = null;

    /**
     * @param {string | URL | Request} url
     */
    async function loadWeatherData(url) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (err) {
            error = "Error fetching data";
            console.error("Error fetching data:", err);
            return null;
        }
    }

    onMount(async () => {
        weatherData = await loadWeatherData(apiURL);
    });
</script>

{#if error}
    <p class="error">{error}</p>
{:else if !weatherData}
    <p>Loading weather data...</p>
{:else}
    <h2>Latitude: {weatherData.latitude}</h2>
    <h2>Longitude: {weatherData.longitude}</h2>
    <table class="hourly-weather">
        <thead>
            <tr>
                <th>Time</th>
                <th>Temperature</th>
                <th>Humidity</th>
            </tr>
        </thead>
        <tbody>
            {#each weatherData.hourly.time as time, i}
                <tr>
                    <td class="time">{time}</td>
                    <td class="temp">{weatherData.hourly.temperature_2m[i]}</td>
                    <td class="humidity">{weatherData.hourly.relative_humidity_2m[i]}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{/if}
</script>