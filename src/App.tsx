import { useState } from 'react';

import { Header } from './components/header/Header';
import { TodoPanel } from './components/todoPanel/TodoPanel';

import { Todo } from '../index'
import { TodoList } from './components/todoList/TodoList';

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task 1', description: 'description 1', checked: false },
  { id: 2, name: 'task 2', description: 'description 2', checked: false },
  {
    id: 3,
    name: 'task 3',
    description: 'moremoremoremoremoremoremoremoremoremoremreodescription 3',
    checked: true
  },
];

function App() {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);

  const addTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, description, name, checked: false }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header todoCount={todos.length} />
      </header>
      <TodoPanel addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
