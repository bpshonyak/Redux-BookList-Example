import React, { Component } from 'react';

export default class BookList extends Component {

  renderList() {
    return this.props.books.map( book => {
       return <i key={book.title} className="list-group-item">{book.title}</li>
    });
  }

  render(){
    <ul className="list-group col-sm-4">
      { this.renderList() }
    </ul>
  }
}
