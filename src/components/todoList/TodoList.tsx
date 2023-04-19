import { Todo } from '../../../index';
import { TodoItem } from './todoItem/TodoItem';

interface TodoListProps {
    todos: Todo[];
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, checkTodo, deleteTodo }) => {
    return <div>
        {todos.map((todo) => (
            <TodoItem todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} />
        ))}
    </div>
}