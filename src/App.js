import React, { Component } from 'react'
import BookShelves from './BookShelves'
import SearchList from './SearchList'
import { Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route path="/search" component={() => (
          <SearchList />
        )} />
        <Route exact path="/" render={() => (
          <div>
            <BookShelves booksData= {books} />
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
      </div>
      )
  }
}

export default BooksApp