import React from 'react'
import BookShelf from './BookShelf'

const BookShelves = props => {
   const { books, changeShelf } = props;
      return (
         <div className="list-books-content">
            <div>
               <div className="list-books">
                  <div className="list-books-title">
                     <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                     <BookShelf
                        title='Currently Reading'
                        books= {books.filter( book => book.shelf === 'currentlyReading')}
                        changeShelf= {changeShelf} />
                     <BookShelf
                        title='Want to Read'
                        books= {books.filter( book => book.shelf === 'wantToRead')}
                        changeShelf= {changeShelf} />
                     <BookShelf
                        title='Read'
                        books= {books.filter( book => book.shelf === 'read')}
                        changeShelf= {changeShelf} />
                  </div>
               </div>
            </div>
         </div>
      )

}

export default BookShelves