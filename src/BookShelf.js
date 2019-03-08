import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {

    const { booksData } = this.props;
    return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <Book booksData = {booksData}/>
              </ol>
            </div>
          </div>
      )
  }
}
export default BookShelf