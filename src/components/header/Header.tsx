import React from "react";

import './Header.scss';
import { UseTodo } from "../../utils/contextes";

export const Header: React.FC = () => {
    const { todos } = UseTodo()
    return (
        <div className="header_container">
            <div className="header_title">
                Todo list <b>{todos.length}</b> task(s)
            </div>
        </div>
    );
}
