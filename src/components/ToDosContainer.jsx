import React, {Component} from "react";
import ToDoItem from "./ToDoItem";

export default class ToDosContainer extends Component{
    state={
        inputText:"",
    }

    storeInputText=(e)=>{
        this.setState({inputText: e.target.value })
    }
    formSubmitted=(e)=>{
        e.preventDefault();
        if(this.state.inputText!==""){
            this.props.addItem(this.state.inputText);
            this.setState({inputText: ""});
        }    
    }
    render(){
    const todoItems =this.props.todos.map(data=>{
        return(
            <ToDoItem key={data.id} item={data.text} />
        ) 
    })

        return(
            <div className="todos-container">
                <form onSubmit={this.formSubmitted} className="todo-form">
                    <label className="input-item" htmlFor="todo">
                        <input onChange={this.storeInputText} value={this.state.inputText} placeholder="New To-Do..." id="todo" name="todo" type="text"/>
                    </label>
                    <input type="submit" className="btn" value="Add"/>
                </form>
                <div className="todos">
                    <h3>To-Do's</h3>
                    {todoItems}
                </div>
            </div>
        )
    }
    
}