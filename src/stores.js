import { writable } from 'svelte/store'
import { createRouteStore } from 'svelte-store-router'
import { books as books_json } from './books.json'

export const books = writable(books_json)

export const route = createRouteStore({
  delay: 300,
  queryClean: true,
  fragmentClean: true
})