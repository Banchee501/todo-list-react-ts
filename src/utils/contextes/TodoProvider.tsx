import { TodoContext } from "./TodoContext";
import { Todo } from "../../..";

import { useMemo, ReactNode, useState, useCallback } from 'react';

const DEFAULT_TODO_LIST = [
    { id: 1, name: 'task 1', description: 'description 1', checked: false },
    { id: 2, name: 'task 2', description: 'description 2', checked: false },
    {
        id: 3,
        name: 'task 3',
        description: 'moremoremoremoremoremoremoremoremoremoremore description 3',
        checked: true
    },
];

interface TodoProviderProps {
    children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
    const [todoIdForEdit, setTodoIdForEdit] = useState<Todo['id'] | null>(null);

    const selectTodoIdForEdit = useCallback((id: Todo['id']) => {
        setTodoIdForEdit(id);
    }, []);

    const addTodo = useCallback(({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
        const lastTodo = todos[todos.length - 1];
        const newId = (lastTodo?.id ?? 0) + 1;
        setTodos([...todos, { id: newId, description, name, checked: false }])
    }, [todos]);

    const checkTodo = useCallback((id: Todo['id']) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo, checked: !todo.checked
                };
            }
            return todo;
        }))
    }, [todos]);

    const deleteTodo = useCallback((id: Todo['id']) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }, [todos]);

    const changeTodo = useCallback(({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
        setTodos(todos.map(todo => {
            if (todo.id === todoIdForEdit) {
                return {
                    ...todo, name, description
                };
            }
            return todo;
        })
        );
        setTodoIdForEdit(null);
    }, [todoIdForEdit, todos]);

    const value = useMemo(() => ({
        todoIdForEdit,
        todos,
        deleteTodo,
        changeTodo,
        addTodo,
        selectTodoIdForEdit,
        checkTodo
    }), [
        todoIdForEdit,
        todos,
        deleteTodo,
        changeTodo,
        addTodo,
        selectTodoIdForEdit,
        checkTodo
    ]
    );
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}