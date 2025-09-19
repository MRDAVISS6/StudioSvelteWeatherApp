<script>
    import Button.svelte from '$lib/Components/Button.svelte';
</script>

<section>
    <a href="/">24HR Forecast</a>
    <a href="/about">7 Day Forecast</a>
    <Button />
</section>

<style>
 
 
a{
    font-weight: bold;
    color:aquamarine;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
}
a:hover{
    color: orangered;
}

section{
    position: fixed;
    display: flex;
    border: 1px solid black;
    justify-content: space-around;
    width:100%;
    top:0;
    background-color: rgb(80, 80, 80);
    padding: 2px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
}
button{
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
    color:orangered;
}
button:hover{
    transform: scale(1.2);
    transition: transform 0.2s;
}
</style>