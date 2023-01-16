const Todos: React.FC<{items: string[]}> = (props) => {
  return (
    <div>
      {props.items.map(item => <li>{item}</li>)}
    </div>
  )

}

export default Todos
