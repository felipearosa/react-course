import Todo from "../models/Todo"

const Todos: React.FC<{items: Todo[]}> = (props) => {
  return (
    <div>
      {props.items.map(item => <li key={item.id}>{item.text}</li>)}
    </div>
  )

}

export default Todos
