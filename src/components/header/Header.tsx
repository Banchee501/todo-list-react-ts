import React from "react";

import './Header';

interface HeaderProps {
    todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => {
    return (
        <div className="header_container">
            <div className="header_title">
                Todo list <b>{todoCount}</b> task(s)
            </div>
        </div>
    )

}