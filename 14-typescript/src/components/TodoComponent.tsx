import Todo from "../models/Todo"

const TodoComponent: React.FC<{item: Todo}> = (props) => {
  return (
    <li key={props.item.id}>{props.item.text}</li>
  )
}

export default TodoComponent
