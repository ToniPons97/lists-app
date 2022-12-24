import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className='flex flex-row justify-center items-center w-screen bg-yellow-50'>
      <TodoList />
    </div>
  );

}

export default App;
