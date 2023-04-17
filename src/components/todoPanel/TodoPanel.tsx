import { useState } from "react";

import { Button } from '../button/Button';

import { Todo } from '../../../index';

import './TodoPanel.scss';

const DEFAULT_TODO = {
    name: '',
    description: '',
};

interface TodoPanelProps {
    addTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void;
}

export const TodoPanel: React.FC<TodoPanelProps> = ({ addTodo }) => {
    const [todo, setTodo] = useState(DEFAULT_TODO);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    }

    const onClick = () => {
        addTodo({ name: todo.name, description: todo.description });
        setTodo(DEFAULT_TODO);
    }

    return (
        <div className="todo_panel_container">
            <div className="fields_container">
                <div className="field_container">
                    <label htmlFor="name">
                        <div>name</div>
                        <input type="text"
                            id="name"
                            value={todo.name}
                            name="name"
                            onChange={onChange} />
                    </label>
                </div>
                <div className="field_container">
                    <label htmlFor="description">
                        <div>description</div>
                        <input type="text"
                            id="description"
                            value={todo.description}
                            name="description"
                            onChange={onChange} />
                    </label>
                </div>
            </div>
            <div className="button_container">
                <Button
                    color="blue"
                    onClick={onClick}>
                    ADD
                </Button>
            </div>
        </div>
    )
}