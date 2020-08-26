import React from 'react'

export default function DoneItems({done}) {
    return (
        <div className="todones-item">
            <p>{done}</p>
            <div className="action">
                <button className="btn">&#8635;</button>
            </div>
        </div>
    )
}
