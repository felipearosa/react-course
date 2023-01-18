import React, { useContext } from "react"
import { TodosContext } from "../store/todos-context"
import TodoComponent from "./TodoComponent"
import styles from './Todos.module.css'

const Todos: React.FC = () => {

  const todosCtx = useContext(TodosContext);


  return (
    <div className={styles.todos}>
      {todosCtx.items.map(item => <TodoComponent key={item.id} onRemoveItem={todosCtx.removeItem.bind(null, item)} item={item} />)}
    </div>
  )
}

export default Todos
