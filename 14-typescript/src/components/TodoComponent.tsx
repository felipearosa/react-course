import Todo from "../models/Todo"
import styles from './TodoComponent.module.css'

const TodoComponent: React.FC<{item: Todo}> = (props) => {
  return (
    <li className={styles.item} key={props.item.id}>{props.item.text}</li>
  )
}

export default TodoComponent
