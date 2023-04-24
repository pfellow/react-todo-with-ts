import React from 'react';
import styles from './Todo.module.css';

const Todo: React.FC<{
  text: string;
  id: string;
  removeTodo: (id: string) => void;
}> = (props) => {
  return (
    <li
      className={styles.item}
      onClick={() => props.removeTodo(props.id)}
    >
      {props.text}
    </li>
  );
};

export default Todo;
