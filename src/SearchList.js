import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchList extends Component {
	state = {
		foundBooks: [],
		query: ''
	}
	handleSearchBooks = (query) => {
		this.updateQuery(query)
		this.searchBooks(query)
	 }
	updateQuery = (query) => {
		this.setState(() =>(
			{
			query: query.trim()
		}))
	}
	searchBooks(query) {
	    if (query !== '') {
	      BooksAPI.search(query)
	      .then((books) => {
	        this.setState(() => ({
	          foundBooks: books
	        }))
	      })
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
			})
			return foundBook
		})

		return (
			<div className="search-books">
	            <div className="search-books-bar">
	              <Link to="/" className="close-search">Close</Link>
	              <div className="search-books-input-wrapper">
	                {/*
	                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
	                  You can find these search terms here:
	                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	                  you don't find a specific author or title. Every search is limited by search terms.
	                */}
	                <input
	                	type="text"
	                	placeholder="Search by title or author"
	                	value={query}
	                	onChange={(event) => this.handleSearchBooks(event.target.value)}/>

	              </div>
	            </div>
            	<div className="search-books-results">

            	{this.state.foundBooks.length > 0 ? (
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