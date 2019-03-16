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

  changeShelf = (newBook, shelf) => {
    BooksAPI.update(newBook, shelf).then( response => {
      newBook.shelf = shelf;
      this.setState(
          prevState => ({
          books: prevState.books
            .filter(book => book.id !== newBook.id)
            .concat(newBook)
        }));
    });
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route path="/search" component={() => (
          <SearchList
            books= {books}
            changeShelf= {this.changeShelf} />
        )} />
        <Route exact path="/" render={() => (
          <div>
            <BookShelves
              books= {books}
              changeShelf={this.changeShelf} />
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