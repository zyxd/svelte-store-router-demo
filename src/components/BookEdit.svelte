<Modal on:close={close}>
  <h1>Edit book {id}</h1>
  <hr>

  <label>
    <h2>Title:</h2>
    <input bind:value={$route.fragment.title}>
  </label>

  <label>
    <h2>Author:</h2>
    <input bind:value={$route.fragment.author}>
  </label>

  <label>
    <h2>Description:</h2>
    <textarea bind:value={$route.fragment.description}></textarea>
  </label>

  <p>
    You can try to edit any fields and reload page before save or close this window.
    The entered data should not be lost.
  </p>

  <hr>
  <div class="buttons">
    <div>
      <button on:click={save}>Save</button>
      <button on:click={remove}>Remove</button>
    </div>
    <button on:click={close}>Close</button>
  </div>
</Modal>

<script>
  import { createEventDispatcher } from 'svelte'
  import { books, route } from '../stores'
  import Modal from './Modal.svelte'
  
  export let id

  const dispatch = createEventDispatcher()
  const { title, author, description } = $books.find(b => b.id === id)

  const close = () => {
    $route.fragment.title = null
    $route.fragment.author = null
    $route.fragment.description = null
    dispatch('close')
  }

  const save = () => {
    books.update($books => $books.map(book => {
      if (book.id === id) {
        return {
          id,
          title: $route.fragment.title,
          author: $route.fragment.author,
          description: $route.fragment.description
        }
      } else {
        return book
      }
    }))

    close()
  }

  const remove = () => {
    books.update($books => $books.filter(book => book.id !== id))
    close()
  }

  if (!$route.fragment.title) {
    $route.fragment.title = title
  }

  if (!$route.fragment.author) {
    $route.fragment.author = author
  }

  if (!$route.fragment.description) {
    $route.fragment.description = description
  }
</script>

<style>
  h1 {
    font-size: 1rem;
    margin: 0;
  }

  hr {
    border-width: 1px 0 0 0;
    border-style: solid;
    border-color: #ccc;
    margin: 1rem 0;
  }

  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }

  h2 {
    margin: 0 0 0.3rem 0;
    font-weight: normal;
    font-size: 0.8rem;
  }

  input {
    display: block;
    width: 100%;
    font-style: italic;
  }

  textarea {
    display: block;
    width: 100%;
    height: 5rem;
    resize: none;
    font-style: italic;
  }

  p {
    font-size: 0.8rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  button {
    margin: 0;
    font-size: 0.8rem;
  }

  button:hover {
    cursor: pointer;
  }
</style>