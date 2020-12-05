<script>
	export let hue = 120
	export let disabled = false
</script>

<style>
	button {
		min-width: 7rem;
		display: inline-block;
		padding: 0.5rem 1rem;
		border-width: 2px;
		border-style: solid;
		border-radius: 0.5rem;
		cursor: pointer;
		background-color: hsl(var(--hue), 50%, 90%);
		border-color:     hsl(var(--hue), 50%, 50%);
		color:            hsl(var(--hue), 50%, 20%);
	}
	
	button:hover {
		background-color: hsl(var(--hue), 100%, 30%);
		border-color:     hsl(var(--hue), 100%, 30%);
		color:            hsl(var(--hue), 50%, 100%);
	}
	
	button:disabled {
		background-color: hsl(var(--hue), 10%, 80%);
		border-color:     hsl(var(--hue), 10%, 80%);
		color:            hsl(var(--hue), 10%, 70%);
		cursor: default;
	}
</style>

<button style="--hue: {hue}" {disabled}>
	<slot/>
</button>