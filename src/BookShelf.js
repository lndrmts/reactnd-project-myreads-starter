import React from 'react'
import Book from './Book'

const BookShelf = props => {
   const { books, title, changeShelf } = props;
      return (
         <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
               <Book
                  books = {books}
                  changeShelf= {changeShelf} />
            </div>
         </div>
      )
}

export default BookShelf