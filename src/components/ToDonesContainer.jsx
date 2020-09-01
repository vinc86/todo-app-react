import React from "react";
import DoneItems from "./DoneItems";

export default function ToDoDones(props){
   

const doneItems = props.dones.map(item=>{
    return(
        <DoneItems update={props.update} key={item.id} id={item.id} done={item.text} />
    )
})
    return(
        <div className="todones-container">
            <h3>Done To-Do's</h3>
        {doneItems}
        </div>
    )
}