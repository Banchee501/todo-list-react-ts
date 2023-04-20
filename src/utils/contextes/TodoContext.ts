import { createContext } from 'react';

import { Todo } from "../../..";

interface TodoContextProps {
    todos: Todo[];
    todoIdForEdit: Todo['id'] | null;
    addTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
    changeTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void;
    selectTodoIdForEdit: (id: Todo['id']) => void;
}

export const TodoContext = createContext<TodoContextProps>({
    todoIdForEdit: null,
    todos: [],
    deleteTodo: () => { },
    changeTodo: () => { },
    addTodo: () => { },
    selectTodoIdForEdit: () => { },
    checkTodo: () => { },
});