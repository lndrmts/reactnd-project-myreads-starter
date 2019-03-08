import React, {Component} from 'react'
import BookShelf from './BookShelf'

class BookShelves extends Component {
	render() {
    const { booksData } = this.props;
		return (
    <div className="list-books-content">
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookShelf booksData= {booksData.filter( book => book.shelf === 'currentlyReading')} />
            <BookShelf booksData= {booksData.filter( book => book.shelf === 'wantToRead')} />
            <BookShelf booksData= {booksData.filter( book => book.shelf === 'read')} />
          </div>
        </div>
      </div>
    </div>
		)
	}
}

export default BookShelves