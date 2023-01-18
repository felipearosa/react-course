import React, { useState } from "react"
import Todo from "../models/Todo"

type TodosContextObj = {
  items: Todo[];
  addTodo: (item: string) => void;
  removeItem: (item: Todo) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => { },
  removeItem: (item: Todo) => { }
})

const TodoContextProvider: React.FC = props => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (item: string) => {
    const newTodo = new Todo(item);

    setTodos(previousState => {
      return [...previousState, newTodo]
    })
  }

  const removeItem = (item: Todo) => {
    setTodos(previousState => {
      const newState = previousState.filter(todo => todo !== item)
      return newState;
    })
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodo,
    removeItem: removeItem
  }

  return (
    <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
  )
}

export default TodoContextProvider;
