<main>
	<header>
		<h1><a href="https://github.com/zyxd/svelte-store-router">svelte-store-router</a></h1>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/users/1">User 1</a></li>
				<li><a href="/users/2">User 2</a></li>
				<li><a href="/not/existing/page">Not existing page</a></li>
				<li><a href="https://google.com">External link</a></li>
			</ul>
		</nav>
	</header>

	<Matcher>
		<Match path={$route.path} pattern="/">
			<Home/>
		</Match>
		<Match path={$route.path} pattern="/users/:id" let:params={{ id }}>
			<User {id}/>
		</Match>
		<Match path={$route.path} pattern="/users/:id/documents" let:params={{ id }}>
			<UserDocuments {id}/>
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
	import User from './User.svelte'
	import UserDocuments from './UserDocuments.svelte'
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

	h1 > a {
		color: inherit;
		text-decoration: none;
	}

	nav > ul {
		display: flex;
		list-style: none;
		margin: 0 0 2rem 0;
		padding: 0;
		justify-content: space-between;
		flex-wrap: wrap;
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