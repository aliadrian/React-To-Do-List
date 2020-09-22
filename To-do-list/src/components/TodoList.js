import React from 'react'
// Import Components
import Todo from './Todo';

export default function TodoList({ todos, setTodos, filteredTodos }) {
    
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                    setTodos={setTodos}
                    todos={todos}
                    key={todo.id} 
                    text={todo.text} 
                    todo={todo} />
                ))}
            </ul>
        </div>
    );
};
