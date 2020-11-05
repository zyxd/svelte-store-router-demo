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

{#if typeof $route.query.a !== 'undefined' && typeof $route.query.b !== 'undefined'}
  <p>
    {$route.query.a} + {$route.query.b} = {$route.query.a + $route.query.b}
  </p>
{:else}
  <p>Try to change values above</p>
{/if}

<script>
  import { route } from '../stores'
</script>