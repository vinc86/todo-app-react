import React,{Component} from 'react';
import "./css/App.scss"
import Navigation from './components/Navigation';
import ToDosContainer from './components/ToDosContainer';
import ToDoDones from './components/ToDonesContainer';
import {Switch , BrowserRouter, Route} from "react-router-dom";
import Help from './components/Help';
import Notfound from "./components/Notfound";
class App extends Component{
  
      state={
        items:[
        ]
      }
/* componentDidMount(){
  let storedItems = localStorage.getItem("to-do-item");
  let convertData = JSON.parse(storedItems);
  this.setState({
    items: convertData
  })
} */
  addItem=(inputText)=>{
    const item = {
      id: this.state.items.length,
      text: inputText,
      done: false
    }
    this.setState({
      // lo spread operator consente di concatenare i nuovi elementi agli elementi precedenti
      items: [...this.state.items, item]
    },()=>{
      //storin into local storage
     /*  localStorage.setItem("to-do-app", JSON.stringify(this.state.items)) */
    })

  }

  updateItem=(id)=>{
    const updatedItems = this.state.items.map(item=>{
      if(item.id===id){
        //cambia lo stato da vero a falso e viceversa
        item.done=!item.done;
        return item;
      } else {
        return item;
      }
    })
    this.setState({items: updatedItems},()=>{
     /*  localStorage.setItem("to-do-app", JSON.stringify(this.state.items)) */
    })
  }

  /* deleteItem=(id)=>{
    const updateItem = this.state.items.filter(item=>item.id !== id)
    this.setState({
      items: updateItem
    },()=>{
      localStorage.setItem("to-do-app", JSON.stringify(this.state.items))
    })
  } */
  render(){
   
    const toDos = this.state.items.filter(item=>item.done===false)
    const toDones = this.state.items.filter(item=>item.done===true)
    return (
      <div className="app">
        <BrowserRouter>
        <Navigation />
        <Switch>
        <Route path="/" exact>
          <ToDosContainer update={this.updateItem} addItem={this.addItem} todos={toDos} />
          <ToDoDones update={this.updateItem} dones={toDones} />
        </Route>
        <Route path="/help" component={Help}/>
        <Route component={Notfound}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
