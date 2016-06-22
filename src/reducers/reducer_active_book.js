/**
 * @state State of object this reducer returns
 * @action
*/
export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
      break;
    default:
    
  }
  return state;
}
