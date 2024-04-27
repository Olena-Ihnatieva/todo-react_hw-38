import {useState} from 'react';
import styles from "./todo.module.css";

export default function TodoItem({ todo, deleteTodo}) {
  const [checked, setChecked] = useState(todo.done);

  const сheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={styles.todo_item}>
      <div className={styles.input_wrapper_item}>
        <input
          type="checkbox"
          checked={checked}
          onChange={сheckboxChange}
          className={styles.todo_checkbox}
        />
        <div
          className={`${styles.todo_title} ${checked ? styles.checked : ''}`}>{todo.title}
        </div>
      </div>
      <div
        className={styles.todo_btn}
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
      >
        Delete
      </div>
    </div>
  );
};
