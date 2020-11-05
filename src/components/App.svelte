<main>
	<header>
		<h1>svelte-store-router</h1>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/one">Page 1</a></li>
				<li><a href="/two">Page 2</a></li>
				<li><a href="/not/existing/page">Not existing page</a></li>
				<li><a href="https://google.com">External link</a></li>
			</ul>
		</nav>
	</header>

	<Matcher>
		<Match path={$route.path} pattern="/">
			<Home/>
		</Match>
		<Match path={$route.path} pattern="/one">
			<Page1/>
		</Match>
		<Match path={$route.path} pattern="/two">
			<Page2/>
		</Match>
		<Match path={$route.path}>
			<PageNotFound/>
		</Match>
	</Matcher>
</main>

<script>
	import { Matcher, Match } from 'svelte-store-router'
	import { route } from '../stores'
	import Home from './Home.svelte'
	import Page1 from './Page1.svelte'
	import Page2 from './Page2.svelte'
	import PageNotFound from './PageNotFound.svelte'
</script>

<style>
	main {
		padding: 1em;
		max-width: none;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 100;
		text-align: center;
	}

	nav > ul {
		display: flex;
		list-style: none;
		margin: 0 0 2rem 0;
		padding: 0;
		justify-content: space-between;
	}

	nav > ul > li {
		display: block;
		margin: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: 500px;
		}
	}
</style>