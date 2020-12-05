<div in:fly={{ y: 200 }}>
  <input bind:value={$route.query.search} placeholder="Search">

  <table>
    <thead>
      <tr>
        <th on:click={() => $route.query.sort = null}>Id</th>
        <th on:click={() => $route.query.sort = 'title'}>Title</th>
        <th on:click={() => $route.query.sort = 'author'}>Author</th>
        <th on:click={() => $route.query.sort = 'description'}>Description</th>
      </tr>
    </thead>
    <tbody>
      {#each sort(search($books, $route.query.search), $route.query.sort) as book}
        <tr on:click={() => $route.fragment.edit = book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.description}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <a href="https://www.theguardian.com/books/2003/oct/12/features.fiction">
    The Guardian: The 100 greatest novels of all time
  </a>
</div>

{#if Number.isInteger($route.fragment.edit)}
  <BookEdit
    id={$route.fragment.edit}
    on:close={() => $route.fragment.edit = null}
  />
{/if}

<script>
  import { fly } from 'svelte/transition'
  import { books, route } from '../stores'
  import BookEdit from './BookEdit.svelte'

  const sort = (books, key) => {
    return [...books].sort((a, b) => {
      if (a[key] < b[key]) {
        return -1
      } else if (a[key] > b[key]) {
        return 1
      } else if (a[key] === b[key]) {
        return 0
      }
    })
  }

  const search = (books, str) => {
    return [...books].filter(book => {
      if (str) {
        return book.title.toLowerCase().includes(str)
          || book.author.toLowerCase().includes(str)
          || book.description.toLowerCase().includes(str)
      } else {
        return true
      }
    })
  }
</script>

<style>
  input {
    width: 100%;
    display: block;
    font-style: italic;
  }

  table {
    font-size: 0.8rem;
    border: 1px solid hsl(0, 0%, 40%);
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    text-align: left;
    padding: 0.5rem 0.3rem;
  }

  table > thead > tr {
    background-color: hsl(0, 0%, 40%);
    color: hsl(0, 0%, 100%);
  }

  table > thead > tr > th:hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 60%);
  }

  table > tbody > tr {
    background-color: hsl(0, 0%, 100%);
  }

  table > tbody > tr:nth-child(2n) {
    background-color: hsl(0, 0%, 90%);
  }

  table > tbody > tr:hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 70%);
    color: hsl(0, 0%, 98%);
  }

  a {
    display: block;
    font-size: 0.8rem;
    font-style: italic;
    text-align: center;
    padding: 1rem 0;
  }
</style>