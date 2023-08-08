import React from 'react';

const Form = ({ formSubmitHandler, Item, setItem }) => {
    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <input type="text" placeholder='Add Todos' value={Item} onChange={e => setItem(e.target.value)} />
                <button>Add Item</button>
            </form>
        </>
    );
};

export default Form;