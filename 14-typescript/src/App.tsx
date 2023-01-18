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

  const removeItem = (item: Todo) => {
    setTodos(previousState => {
      const newState = previousState.filter(todo => todo !== item)
      return newState;
    })
  }

  return (
    <Fragment>
      <NewTodo onAddToDo={addTodo} />
      <Todos items={todos} onRemove={removeItem} />
    </Fragment>
  );
}

export default App;
