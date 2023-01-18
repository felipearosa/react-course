import { Fragment, useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (item: string) => {
    const newTodo = new Todo(item);

    setTodos(previousState => {
      return [...previousState, newTodo]
    })
  }

  return (
    <Fragment>
      <Todos items={todos} />
      <NewTodo onAddToDo={addTodo} />
    </Fragment>
  );
}

export default App;
