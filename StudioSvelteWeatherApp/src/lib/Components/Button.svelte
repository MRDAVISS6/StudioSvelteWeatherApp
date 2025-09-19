<script>
    function toggle() {
        window.document.body.classList.toggle('dark-mode')
    }
    </script>
    <button on:click={toggle}>
        <slot/>
    </button>
    <style>
        button {
            font-size: 20px;
            background: none;
            border: none;
            cursor: pointer;
            color:orangered;
        }
        button:hover {
            transform: scale(1.2);
            transition: transform 0.2s;
        }
        body.dark-mode button {
            background-color: #0084f6;
            color: white;
        }
    </style>