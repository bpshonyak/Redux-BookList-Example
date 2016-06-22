import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
  render() {

    if(!this.props.book) {
      return (
        <div>
          <h3>Select a book to get started.</h3>
        </div>
      );
    }

    return (
      <div>
        <h3>Details For: </h3>
        <div>{this.props.book.title}</div>
      </div>
    );
  }
}

// Pre-process state
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside the BookList class.
  return {
    book: state.activeBook
  };
}

// Export BookDetails as a container
export default connect(mapStateToProps)(BookDetails);
