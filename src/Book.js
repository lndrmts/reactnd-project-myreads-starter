import React from 'react'

const Book = props => {
		const books = props.books.map((book) => {
		const updateShelf = event =>
		props.changeShelf(book, event.target.value);

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
									backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x188.png?text=no%20image'})`
								}
							}
							>
							</div>
						<div className="book-shelf-changer">
							<select value={book.shelf} onChange={updateShelf}>
			                <option value="move" disabled>Move to...</option>
			                <option value="currentlyReading">Currently Reading</option>
			                <option value="wantToRead">Want to Read</option>
			                <option value="read">Read</option>
			                <option value="none">None</option>
			              </select>
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