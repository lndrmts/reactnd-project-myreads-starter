import React from 'react'
import BookShelfChanger from './BookShelfChanger'


const Book = props => { 
    const books = props.booksData.map((book, index) => {
        return (
        	<li key={book.id}>
           <div className="book">
					<div className="book-top">
						<div 
							className="book-cover" 
							style={
								{ 
									width: 128, 
									height: 188, 
									backgroundImage: `url(${book.imageLinks.thumbnail})`
								}
							}
							>
							</div>
						<div className="book-shelf-changer">
							<BookShelfChanger />
						</div>
					</div>
						<div className="book-title">{book.title}</div>
						<div className="book-authors">{book.subtitle}</div>
				</div>
			</li>
        );
    });

    return <ol className="books-grid">{books}</ol>;
}

export default Book