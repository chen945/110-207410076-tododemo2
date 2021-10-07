import Todo from './components/Todo'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text='dog 1' />
      <Todo text='dog 2' />
      <Todo text='dog 3' />
    </div>
  );
}

export default App;
