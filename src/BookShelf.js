import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component {
    render() {
    const { books, title, changeShelf } = this.props;
    return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <Book
                  books = {books}
                  changeShelf= {changeShelf}/>
            </div>
          </div>
      )
  }
}
export default BookShelf