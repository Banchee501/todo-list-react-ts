// import { useEffect, useState } from 'react';
import { Header } from '../components/header/Header';
import { TodoPanel } from '../components/todoPanel/TodoPanel';
import { TodoList } from '../components/todoList/TodoList';
import { TodoProvider } from '../utils/contextes';
// import { getTodos, addTodo } from '../controllers/todos';

import '../styles/style.scss'
// import { ITodo } from '../types/types';

function App() {
  // const [todos, setTodos] = useState<ITodo[]>([])

  // useEffect(() => {
  //   fetchTodos()
  // }, [])

  // const fetchTodos = (): void => {
  //   getTodos()
  //   .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
  //   .catch((err: Error) => console.log(err))
  // }

  // const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
  //   e.preventDefault()
  //   addTodo(formData)
  //     .then(({ status, data }) => {
  //       if (status !== 201) {
  //         throw new Error("Error! Todo not saved")
  //       }
  //       setTodos(data.todos)
  //     })
  //     .catch(err => console.log(err))
  // }

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
