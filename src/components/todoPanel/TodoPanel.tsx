import { useState } from "react";

import './TodoPanel'

const DEFAULT_TODO = {
    name: '',
    description: '',
};

export const TodoPanel = () => {
    const [todo, setTodo] = useState(DEFAULT_TODO);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    }

    return (
        <div className="">
            <div>
                <div>
                    <label htmlFor="name">
                        <div>name</div>
                        <input type="text"
                            id="name"
                            value={todo.name}
                            name="name"
                            onChange={onChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor="description">
                        <div>description</div>
                        <input type="text"
                            id="description"
                            value={todo.description}
                            name="description"
                            onChange={onChange} />
                    </label>
                </div>
                <div>
                    <button>ADD</button>
                </div>
            </div>
        </div>
    )
}