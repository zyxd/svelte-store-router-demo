<svelte:head>
  <title>Nested pages - svelte-store-router demo</title>
</svelte:head>

<section in:fly={{ y: 200 }}>
  <div>
    <a href="nested/subpage1">subpage 1</a>
    <a href="nested/subpage2">subpage 2</a>
  </div>
  <Matcher>
    <Match route={$route} pattern="nested/subpage1" loose>
      <section in:fly={{ y: 200 }}>
        <div>
          <a href="nested/subpage1/subpage1">subpage 1</a>
          <a href="nested/subpage1/subpage2">subpage 2</a>
        </div>
        <Matcher>
          <Match route={$route} pattern="nested/subpage1/subpage1">
            <section in:fly={{ y: 200 }}>
              subpage 1 of subpage 1
            </section>
          </Match>
          <Match route={$route} pattern="nested/subpage1/subpage2">
            <section in:fly={{ y: 200 }}>
              subpage 2 of subpage 1
            </section>
          </Match>
        </Matcher>
      </section>
    </Match>
    <Match route={$route} pattern="nested/subpage2" loose>
      <section in:fly={{ y: 200 }}>
        <div>
          <a href="nested/subpage2/subpage1">subpage 1</a>
          <a href="nested/subpage2/subpage2">subpage 2</a>
        </div>
        <Matcher>
          <Match route={$route} pattern="nested/subpage2/subpage1">
            <section in:fly={{ y: 200 }}>
              subpage 1 of subpage 2
            </section>
          </Match>
          <Match route={$route} pattern="nested/subpage2/subpage2">
            <section in:fly={{ y: 200 }}>
              subpage 2 of subpage 2
            </section>
          </Match>
        </Matcher>
      </section>
    </Match>
  </Matcher>
</section>

<script>
  import { fly } from 'svelte/transition'
  import { Match, Matcher } from 'svelte-store-router'
  import { route } from '../stores'
</script>

<style>
  section {
    border: 1px solid #AAA;
    margin-top: 1rem;
    padding: 1rem;
  }
</style>