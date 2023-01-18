import Todo from "../models/Todo"
import TodoComponent from "./TodoComponent"
import styles from './Todos.module.css'

const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <div className={styles.todos}>
      {props.items.map(item => <TodoComponent item={item} />)}
    </div>
  )

}

export default Todos
