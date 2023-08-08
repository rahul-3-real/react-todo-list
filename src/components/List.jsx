import React from 'react';

const List = ({ Todos, toggleTodos, deleteTodo }) => {
    return (
        <>
            <ul>
                {Todos.length === 0 && <li className='disabled'><label>No Todos</label></li>}
                {Todos.toReversed().map(item => {
                    return (
                        <li key={item.id} className={item.completed ? 'completed' : ''}>
                            <label>
                                <input type="checkbox" checked={item.completed ? 'checked' : ''} onChange={e => toggleTodos(item.id, e.target.checked)} />
                                {item.title}
                            </label>
                            <button onClick={() => deleteTodo(item.id)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default List;