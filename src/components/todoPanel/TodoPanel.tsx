import { useState } from "react";

import { Button } from '../button/Button';
import { Todo } from '../../../index';

import './TodoPanel.scss';
import { UseTodo } from "../../utils/contextes";

const DEFAULT_TODO = {
    name: '',
    description: '',
};

interface AddTodoPanelProps {
    mode: 'add';
}

interface EditTodoPanelProps {
    mode: 'edit';
    editTodo: Omit<Todo, 'id' | 'checked'>;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
    const { changeTodo, addTodo } = UseTodo();
    const isEdit = props.mode === 'edit';
    const [todo, setTodo] = useState(isEdit ? props.editTodo : DEFAULT_TODO);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    }

    const onClick = () => {
        const todoItem = {
            name: todo.name, description: todo.description
        }
        if (isEdit) {
            return changeTodo(todoItem);
        }

        addTodo(todoItem);
        setTodo(DEFAULT_TODO);
    }

    return (
        <div className="todo_panel_container">
            <div className="fields_container">
                <div className="field_container">
                    <label htmlFor="name">
                        <div className="name">Name</div>
                        <input type="text"
                            id="name"
                            value={todo.name}
                            name="name"
                            onChange={onChange} />
                    </label>
                </div>
                <div className="field_container">
                    <label htmlFor="description">
                        <div className="description">Description</div>
                        <input type="text"
                            id="description"
                            value={todo.description}
                            name="description"
                            onChange={onChange} />
                    </label>
                </div>
            </div>
            <div className="button_container">
                {!isEdit && (
                    <Button
                        color="blue"
                        onClick={onClick}>
                        ADD
                    </Button>
                )}
                {isEdit && (
                    <Button
                        color="orange"
                        onClick={onClick}>
                        EDIT
                    </Button>
                )}
            </div>
        </div>
    )
}