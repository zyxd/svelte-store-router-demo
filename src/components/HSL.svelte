<div in:fly={{ y: 200 }}>
	<Button disabled={$route.query.disabled} hue={($route.query.hue || 0) + 120}>Success</Button>
	<Button disabled={$route.query.disabled} hue={($route.query.hue || 0) + 220}>Info</Button>
	<Button disabled={$route.query.disabled} hue={$route.query.hue || 0}>Alert</Button>

	<br><br>

	<label>
		<input type=checkbox bind:checked={$route.query.disabled}>
		Disable buttons
	</label>

	<div>Hue: {$route.query.hue || 0}</div>
	<input type=range bind:value={$route.query.hue} min="0" max="360">
</div>

<script>
	import { fly } from 'svelte/transition'
	import { route } from '../stores'
	import Button from './Button.svelte'
</script>