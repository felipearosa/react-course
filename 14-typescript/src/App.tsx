import './App.css';
import Todos from './components/Todos';
import Todo from './models/Todo';

function App() {
  const todoItems = [
    new Todo('Learning TS'),
    new Todo('Learning React'),
  ]

  return (
    <Todos items={todoItems}/>
  );
}

export default App;
