import { Todo } from "../../../../index";

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {

    return <div>{todo.name}</div>
};