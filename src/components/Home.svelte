<div>
  <label>
    Search:
    <input type="text" bind:value={$route.query.search}>
  </label>
</div>

<div>
  <label>
    Checked:
    <input type=checkbox bind:checked={$route.query.checked}>
  </label>
</div>

<div>
  <label>
    <input type="number" bind:value={$route.query.a} min=0 max=10>
    <input type="range" bind:value={$route.query.a} min=0 max=10>
  </label>
</div>

<div>
  <label>
    <input type="number" bind:value={$route.query.b} min=0 max=10>
    <input type="range" bind:value={$route.query.b} min=0 max=10>
  </label>
</div>

<p>
  {$route.query.a} + {$route.query.b} = {$route.query.a + $route.query.b}
</p>

<script>
  import { route } from '../stores'

  if (typeof $route.query.a === 'undefined') {
    $route.query.a = 0
  }

  if (typeof $route.query.b === 'undefined') {
    $route.query.b = 0
  }
</script>