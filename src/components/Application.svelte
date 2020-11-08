<main>
	<header>
		<h1>
			<a href="https://github.com/zyxd/svelte-store-router">
				svelte-store-router
			</a>
		</h1>
		<h2>
			<a href="https://www.theguardian.com/books/2003/oct/12/features.fiction">
				The Guardian: The 100 greatest novels of all time
			</a>
		</h2>
	</header>

	<Matcher>
		<Match path={$route.path} pattern="/">
			<Books/>
		</Match>
		<Match path={$route.path}>
			<PageNotFound/>
		</Match>
	</Matcher>
</main>

<script>
	import { Matcher, Match } from 'svelte-store-router'
	import { books, route } from '../stores'
	import Books from './Books.svelte'
	import PageNotFound from './PageNotFound.svelte'
</script>

<style>
	main {
		margin: 0 auto;
	}

	h1, h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1.5rem;
		font-weight: 300;
		text-align: center;
		margin: 0;
		padding: 0.4rem 0;
	}

	h2 {
		font-size: 1rem;
		font-weight: 100;
	}

	h1 > a,
	h2 > a {
		color: inherit;
	}

	@media (min-width: 640px) {
		main {
			max-width: 600px;
		}
	}
</style>