import {useState} from 'react';
import TodoItem from './TodoItem';
import styles from './todo.module.css';

export default function Todo() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'First Todo', description: 'This is a first todo'},
    {id: 2, title: 'Second Todo', description: 'This is a second todo'},
    {id: 3, title: 'Third Todo', description: 'This is a third todo'},
    {id: 4, title: 'Fourth Todo', description: 'This is a fourth todo'},
    {id: 5, title: 'Fifth Todo', description: 'This is a fifth todo'}
  ]);
  const [newTodo, setNewTodo] = useState('');

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  const addTodo = () => {
    if (newTodo) {
      const newTodoItem = {
        title: newTodo,
        description: 'description',
        id: todos.length + 1,
        done: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  return (
    <div className={styles.todo_wrapper}>
      <h3 className={styles.todo_list_title}>Todo list</h3>
      <div className={styles.input_wrapper}>
        <input
          value={newTodo}
          placeholder='New task'
          className={styles.todo_input}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <div className={styles.add_todo} onClick={addTodo}>
          Add
        </div>
      </div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}


