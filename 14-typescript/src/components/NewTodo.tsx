import React, { useRef } from "react";

const NewTodo: React.FC<{onAddToDo: (text: string) => void }> = props => {
  const todoItemInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoItemInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddToDo(enteredText)
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoItemInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;
