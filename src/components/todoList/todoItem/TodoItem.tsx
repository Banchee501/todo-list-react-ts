import { Todo } from "../../../../index";

import "./TodoItem.scss";
import { Button } from "../../button/Button";

interface TodoItemProps {
    todo: Todo;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
    selectTodoIdForEdit: (id: Todo['id']) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, checkTodo, deleteTodo, selectTodoIdForEdit }) => {

    return <div className="todo_item_container">
        <div>
            <div aria-hidden
                style={{
                    opacity: todo.checked ? 0.5 : 1,
                    textDecoration: todo.checked ? 'line-through' : "none"
                }}
                onClick={() => checkTodo(todo.id)}
                className="todo_item_title">
                {todo.name}
            </div>
            <div aria-hidden className="todo_item_description">
                {todo.description}
            </div>
        </div>
        <div className="todo_item_button_container">
            <Button color='orange' onClick={() => selectTodoIdForEdit(todo.id)}>
                Edit
            </Button>
            <Button color='red' onClick={() => deleteTodo(todo.id)}>
                Delete
            </Button>
        </div>
    </div>
};