import React from 'react'

export default function ToDoItem({item,id,update}) {
    return (
        <div className="todo-item">{item}
        <div className="action">
            <button onClick={()=>update(id)} className="btn">&#10004;</button>
        </div>
        </div>

    )
}
