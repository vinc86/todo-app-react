import React from 'react'

export default function ToDoItem({item}) {
    return (
        <div className="todo-item">{item}
        <div className="action">
            <button className="btn">&#10004;</button>
        </div>
        </div>

    )
}
