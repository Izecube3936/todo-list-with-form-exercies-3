import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';
import Forms from './components/Forms';
import Sibarsmall from './components/Sibarsmall';

function App() {
  return (
    <div className="App">
      <TodoApp />
      <Forms />
      <Sibarsmall />
    </div>
  );
}

export default App;
