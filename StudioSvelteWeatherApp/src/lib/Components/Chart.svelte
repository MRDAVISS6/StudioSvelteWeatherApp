<script>
    import weatherData1Day from '$lib/Components/Weather.svelte';
</script>
<!-- showing weather data in charts -->
<main>
    <section>
        <h1>Weather Charts</h1>
        <p>Visual representation of weather data.</p>
    </section>
    <section>
        <h2>Temperature Over Time</h2>
       
        <article class="chart">
            <span>Temperature Chart Placeholder</span>
           <img src="https://via.placeholder.com/400x200?text=Temperature+Chart" alt="Temperature Chart">
            <ul>
                {#if $weatherData1Day && $weatherData1Day.hourly}
                    {#each $weatherData1Day.hourly.temperature_2m as temp, index}
                        <li>Hour {index}: {temp}°C</li>
                    {/each}
                {:else}
                    <li>Loading data...</li>
                {/if}
                
            </ul>

        </article>
    </section>
</main>



<style>
    main {
        padding: 1rem;
        font-family: Arial, sans-serif;
    }

    h1 {
        color: #2c3e50;
    }

    section {
        margin-bottom: 1.5rem;
    }

    .chart {
        width: 100%; 
        height: 300px; 
        background-color: #f0f0f0; 
        display: flex; 
        align-items: center; 
        justify-content: center;
    }
</style>