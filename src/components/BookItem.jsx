import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions';

const BookItem = ({ book, onEdit }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
        </div>
    );
};

export default BookItem;