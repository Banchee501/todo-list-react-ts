import axios from 'axios';
import { useMemo, ReactNode, useState, useCallback, useEffect } from 'react';

import { TodoContext } from "./TodoContext";
import { Todo } from "../../..";

const todoList: Todo[] = [
];

interface TodoProviderProps {
    children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>(todoList);
    const [todoIdForEdit, setTodoIdForEdit] = useState<Todo['id'] | null>(null);

    const selectTodoIdForEdit = useCallback((id: Todo['id']) => {
        setTodoIdForEdit(id);
    }, []);

    const addTodo = useCallback(({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
        if (!name.trim() || !description.trim()) {
            return;
        }
        const newTodo = { id: todos.length + 1, name, description, checked: false };
        setTodos([newTodo, ...todos]);
        axios.post('http://localhost:3000/add', newTodo);
    }, [todos]);

    const checkTodo = useCallback((id: Todo['id']) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo, checked: !todo.checked
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
        axios.put(`http://localhost:3000/${id}`, updatedTodos.find(todo => todo.id === id));
    }, [todos]);

    const deleteTodo = useCallback((id: Todo['id']) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        axios.delete(`http://localhost:3000/delete/${id}`);
    }, [todos]);

    const changeTodo = useCallback(({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
        if (!name.trim() || !description.trim()) {
            return;
        }
        const updatedTodos = todos.map(todo => {
            if (todo.id === todoIdForEdit) {
                return {
                    ...todo, name, description
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
        axios.put(`http://localhost:3000/edit/${todoIdForEdit}`, updatedTodos.find(todo => todo.id === todoIdForEdit));
        setTodoIdForEdit(null);
    }, [todos, todoIdForEdit]);

    useEffect(() => {
        axios.get<Todo[]>('http://localhost:3000/tasks')
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

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
    ]);

    return <TodoContext.Provider value={value}> {children} </TodoContext.Provider>;
};