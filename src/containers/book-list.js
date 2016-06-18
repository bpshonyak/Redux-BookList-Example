import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

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

// Pre-process state
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside the BookList class.
  return {
    books: state.books
  }
}

// Exprot redux container
export default connect(mapStateToProps)(BookList);
