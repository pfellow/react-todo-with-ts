import React, { useState } from 'react';
import TodoDM from '../models/todo';

export const TodosContext = React.createContext<{
  items: TodoDM[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoDM[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new TodoDM(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
