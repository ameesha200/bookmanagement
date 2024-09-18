// reducers.js
import { ADD_BOOK, REMOVE_BOOK, UPDATE_BOOK, SET_LOADING, SET_ERROR } from './actions';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter(book => book.id !== action.payload) };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map(book => (book.id === action.payload.id ? action.payload : book)),
      };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default bookReducer;
