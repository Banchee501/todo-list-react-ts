import { Header } from './components/header/Header';
import { TodoPanel } from './components/todoPanel/TodoPanel';
import { TodoList } from './components/todoList/TodoList';
import { TodoProvider } from './utils/contextes';

function App() {

  return (
    <TodoProvider>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <TodoPanel mode='add' />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
