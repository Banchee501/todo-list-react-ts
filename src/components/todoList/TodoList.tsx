import { Todo } from '../../../index';
import { TodoItem } from './todoItem/TodoItem';

interface TodoListProps {
    todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return <div>
        {todos.map((todo) => (
            <TodoItem todo={todo} />
        ))}
    </div>
}