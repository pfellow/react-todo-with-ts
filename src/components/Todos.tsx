import React, { useContext } from 'react';
import Todo from './Todo';
import { TodosContext } from '../store/todos-context';
import styles from './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <Todo
          key={item.id}
          text={item.text}
          removeTodo={() => todosCtx.removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
