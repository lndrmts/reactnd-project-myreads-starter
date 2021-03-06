import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchList extends Component {
	state = {
		foundBooks: [],
		query: ''
	}
	updateQuery = (query) => {
		this.setState(() =>(
		{
			query: query
		}))
	}

	searchBooks = (query)  => {
		try {

			if (query) {
					BooksAPI.search(query)
						.then((response) => {
							this.setState(() => ({
								foundBooks: !response || response.error ? [] : response
						}))
					})
			} else {
				this.setState(() => ({
					foundBooks: []
				}))

			}
		} catch (e) {

		}
	}
	handleSearchBooks = (query) => {
		let timeout = null;
		const inputSearch = document.getElementById('inputSearch');
		this.updateQuery(query)
		inputSearch.onkeyup = () => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				this.searchBooks(query)
			}, 200)
		}
	}

	render() {
		const { query, foundBooks } = this.state
		const { books, changeShelf } = this.props

		foundBooks.map(foundBook => {
			foundBook.shelf = 'none'
			books.map(book => {
				if(foundBook.id === book.id) {
					foundBook.shelf = book.shelf
				}
				return books
			})
				return foundBook
		})

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
							<input
							id="inputSearch"
							type="text"
							placeholder="Search by title or author"
							value={query}
							onChange={(e) => this.handleSearchBooks(e.target.value)}/>
					</div>
				</div>
				<div className="search-books-results">
				{ this.state.foundBooks.length > 0 ? (
					<Book
						books = {foundBooks}
						changeShelf= {changeShelf}
						shelf = {books.shelf}
					/>
				) : (

					<h3>No Results</h3>

				)}
				</div>
			</div>
		)
	}
}

export default SearchList