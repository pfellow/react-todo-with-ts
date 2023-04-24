import { useRef } from 'react';
import React from 'react';
import styles from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value; //certain that value will always be there

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={styles.form}
    >
      <label htmlFor="text">Todo text</label>
      <input
        ref={inputRef}
        type="text"
        id="text"
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
