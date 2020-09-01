import React from 'react'

export default function DoneItems({done,id,update}) {
    return (
        <div className="todones-item">
            <p>{done}</p>
            <div className="action">
                <button onClick={()=>update(id)} className="btn">&#8635;</button>
            </div>
        </div>
    )
}
