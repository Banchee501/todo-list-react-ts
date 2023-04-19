import { Todo } from '../../../index';
import { TodoItem } from './todoItem/TodoItem';
import { TodoPanel } from '../todoPanel/TodoPanel';

interface TodoListProps {
    todos: Todo[];
    todoIdForEdit: Todo['id'] | null;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
    selectTodoIdForEdit: (id: Todo['id']) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    checkTodo,
    deleteTodo,
    selectTodoIdForEdit,
    todoIdForEdit
}) => {
    return <div>
        {todos.map((todo) => {
            //@ts-ignore
            if (todo.id === todoIdForEdit) return <TodoPanel />;
            return
            (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    checkTodo={checkTodo}
                    deleteTodo={deleteTodo}
                    selectTodoIdForEdit={selectTodoIdForEdit} />
            );
        })}
    </div>
}