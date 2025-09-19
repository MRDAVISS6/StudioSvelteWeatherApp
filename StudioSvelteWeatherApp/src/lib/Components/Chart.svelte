<script>
    import { onMount } from 'svelte';
    import { weatherData1Day, LoadWeatherData } from '$lib/stores/weather.js';

    /**
	 * @type {{ loaded: any; hourly: any; }}
	 */
    let data;

    const unsubscribe = weatherData1Day.subscribe(value => {
        data = value;
    });

    onMount(() => {
        LoadWeatherData();
        return () => unsubscribe(); // Cleanup
    });
</script>

{#if data?.loaded}
    <h2>Hourly Temperatures</h2>
    <ul>
        {#each data.hourly.time as time, i}
            <li>{time}: {data.hourly.temperature_2m[i]}°C </li>
        {/each}
    </ul>
{:else}
    <p>Loading weather data...</p>
{/if}

<style>
    h2 {
        color: #2c3e50;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        background: #ecf0f1;
        margin: 5px 0;
        padding: 10px;
        border-radius: 4px;
    }
</style>