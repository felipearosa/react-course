import Todo from "../models/Todo"
import styles from './TodoComponent.module.css'

const TodoComponent: React.FC<{ item: Todo, onRemoveItem: () => void }> = (props) => {
  return (
    <li onClick={props.onRemoveItem} className={styles.item} >{props.item.text}</li>
  )
}

export default TodoComponent
