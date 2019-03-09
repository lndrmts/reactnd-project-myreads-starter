import React, { Component } from 'react'

class BookShelfChanger extends Component {

	updateShelf = event =>
    	this.props.newShelf(this.props.booksData, event.target.value);
	render() {
		const booksData = this.props;
		console.log(booksData.shelf)
		return (
			<select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
		)
	}
}

export default BookShelfChanger