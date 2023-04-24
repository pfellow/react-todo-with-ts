import React from 'react';
import styles from './Todo.module.css';

const Todo: React.FC<{
  text: string;
  removeTodo: () => void;
}> = (props) => {
  return (
    <li
      className={styles.item}
      onClick={props.removeTodo}
    >
      {props.text}
    </li>
  );
};

export default Todo;
