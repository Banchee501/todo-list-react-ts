import { TodoItem } from './todoItem/TodoItem';
import { TodoPanel } from '../todoPanel/TodoPanel';
import { UseTodo } from '../../utils/contextes';

export const TodoList: React.FC = () => {
    const { todos, todoIdForEdit, checkTodo, deleteTodo, selectTodoIdForEdit } = UseTodo();

    return (
        <>
            {todos.map((todo) => {
                if (todo.id === todoIdForEdit)
                    return (<TodoPanel
                        mode='edit'
                        key={todo.id}
                        editTodo={{ name: todo.name, description: todo.description }} />
                    );
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        checkTodo={checkTodo}
                        deleteTodo={deleteTodo}
                        selectTodoIdForEdit={selectTodoIdForEdit} />
                );
            })}
        </>
    )
}