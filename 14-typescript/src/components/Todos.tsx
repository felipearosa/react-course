import Todo from "../models/Todo"
import TodoComponent from "./TodoComponent"

const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <div>
      {props.items.map(item => <TodoComponent item={item} />)}
    </div>
  )

}

export default Todos
