import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookForm from './components/BookForm'

import BookList from './components/BookList';


const App = () => {
    const [bookToEdit, setBookToEdit] = useState(null);

    return (
        <Provider store={store}>
            <div style={{ maxWidth: '600px',color:'black', margin: '0 auto' }}>
                <h1>Book Management</h1>
                <BookForm bookToEdit={bookToEdit} setBookToEdit={setBookToEdit} />
                <BookList onEdit={setBookToEdit} />
            </div>
        </Provider>
    );
};

export default App;