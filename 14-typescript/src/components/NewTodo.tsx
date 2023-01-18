import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import styles from './NewTodo.module.css'

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  const todoItemInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoItemInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoItemInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;
