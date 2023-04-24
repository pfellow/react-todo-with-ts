import { useState } from 'react';
import Todos from './components/Todos';
import TodoDM from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
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
  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos
        items={todos}
        removeTodo={removeTodoHandler}
      />
    </>
  );
}

export default App;
