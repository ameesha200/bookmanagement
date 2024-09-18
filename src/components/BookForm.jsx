import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, editBook } from '../redux/actions';

const BookForm = ({ bookToEdit, setBookToEdit }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(bookToEdit ? bookToEdit.title : '');
    const [author, setAuthor] = useState(bookToEdit ? bookToEdit.author : '');
    const [id] = useState(bookToEdit ? bookToEdit.id : Date.now());

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { id, title, author };
        if (bookToEdit) {
            dispatch(editBook(book));
        } else {
            dispatch(addBook(book));
        }
        setTitle('');
        setAuthor('');
        setBookToEdit(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Book Title"
                required
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                required
            />
            <button type="submit">{bookToEdit ? 'Edit Book' : 'Add Book'}</button>
        </form>
    );
};

export default BookForm;