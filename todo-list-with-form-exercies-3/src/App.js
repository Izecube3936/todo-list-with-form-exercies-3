import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';
import Forms from './components/Forms';
import SibarsMall from './components/SibarsMall';

function App() {
  return (
    <div className="App">
      <TodoApp />
      <Forms />
      <SibarsMall />
    </div>
  );
}

export default App;
