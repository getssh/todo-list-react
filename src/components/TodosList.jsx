import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import InputToDo from './InputTodo';

const TodoLists = () => {
  const initialTodos = () => {
    const getTodos = JSON.parse(localStorage.getItem('todos'));
    return getTodos || [];
  };

  const [todos, setTodos] = useState(initialTodos());
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <InputTask addTodoItem={addTodoItem} />
      <ul>

        {todos.map((todo) => (
          <li key={todo.id} className="task">
            <div style={viewTask}>
              <input type="checkbox" checked={todo.completed} onChange={() => handleChange(todo.id)} className="checkbox" />
              <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
              <button onClick={() => deleteTodo(todo.id)} type="button" className="btn">
                {' '}
                <FaTrash />
                {' '}
              </button>
              <button type="button" className="btn" onClick={() => handleEditing(todo.id)}>
                {' '}
                <AiFillEdit />
                {' '}
              </button>
            </div>
            <input type="text" value={todo.title} className="textInput" style={editTask} onChange={(e) => setUpdate(e.target.value, todo.id)} onKeyDown={handleUpdate} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoLists;
