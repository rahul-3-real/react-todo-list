import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

const App = () => {

  // States
  const [Item, setItem] = useState('');
  const [Todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  // Effect
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(Todos));
  }, [Todos]);


  // Functions
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (Item.length >= 3) {
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          {
            id: crypto.randomUUID(),
            title: Item,
            completed: false
          }
        ];
      });
      setItem('');
    } else {
      alert('Input length should be more than 3 characters');
    }
  };

  const toggleTodos = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map(item => {
        if (item.id === id) {
          return { ...item, completed };
        }
        return item;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter(item => item.id !== id);
    });
  };

  return (
    <>
      <div className="container">
        <Form formSubmitHandler={formSubmitHandler} Item={Item} setItem={setItem} />
        <h5>Total Todos <span>{Todos.length}</span></h5>
        <List Todos={Todos} toggleTodos={toggleTodos} deleteTodo={deleteTodo} />
      </div>
    </>
  );
};

export default App;