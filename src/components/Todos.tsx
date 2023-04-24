import React from 'react';
import TodoDM from '../models/todo';
import Todo from './Todo';
import styles from './Todos.module.css';

const Todos: React.FC<{ items: TodoDM[]; removeTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <Todo
          key={item.id}
          text={item.text}
          removeTodo={() => props.removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
