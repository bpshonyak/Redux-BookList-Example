export function selectBook(book) {
  // Return an action. The type property identifies the action name
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
