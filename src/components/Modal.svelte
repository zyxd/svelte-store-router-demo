<div class="modal">
  <div class="form" use:clickOutside={() => dispatch('close')}>
    <slot/>
  </div>
</div>

<script>
  import { createEventDispatcher, onMount } from 'svelte'
  import clickOutside from '../actions/clickOutside'

  const dispatch = createEventDispatcher()

  onMount(() => {
    document.body.classList.toggle('noscroll', true)

    return () => {
      document.body.classList.toggle('noscroll', false)
    }
  })
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: brightness(50%) blur(4px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
  }

  .form {
    background-color: white;
    width: 100%;
    min-height: 5rem;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem;
    overflow: hidden;
  }

  @media (min-width: 640px) {
		.form {
			max-width: 500px;
		}
	}
</style>