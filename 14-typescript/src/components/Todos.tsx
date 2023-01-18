import React from "react"
import Todo from "../models/Todo"
import TodoComponent from "./TodoComponent"
import styles from './Todos.module.css'

const Todos: React.FC<{items: Todo[], onRemove: (todo: Todo) => void }> = (props) => {
  return (
    <div className={styles.todos}>
      {props.items.map(item => <TodoComponent key={item.id} onRemoveItem={props.onRemove.bind(null, item)} item={item} />)}
    </div>
  )
}

export default Todos
