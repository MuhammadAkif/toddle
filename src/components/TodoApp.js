import React from 'react';
import AddTodo from './AddTodo.jsx';
import TodoItem from './TodoItem.jsx';

class TodoApp extends React.Component {
    constructor() {
        super();
        this.getEditInput = null;
        this.state = {
            todoItems:[]
        }
        this.handleTodoAdd = this.handleTodoAdd.bind(this);
        this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
        this.handleTodoDelete = this.handleTodoDelete.bind(this);
    }
    handleTodoAdd(newTodo){
        this.setState({
            todoItems: [...this.state.todoItems, newTodo]
        });
    }
    handleTodoUpdate(updatedItem){
        let newTodoItems = this.state.todoItems.map((item)=>{
            return (item.id === updatedItem.id) ? updatedItem : item;
        });
        this.setState({todoItems:newTodoItems});
    }
    handleTodoDelete(itemIndex){
        debugger
        let newTodoItems = [...this.state.todoItems];
        newTodoItems.splice(itemIndex,1);
        this.setState({todoItems:newTodoItems});
    }
    render(){
        return(
            <div className="wrapper">

                <AddTodo handleTodoAdd={this.handleTodoAdd} />
                <div className="todolist-container fancyscroller">
              {
                  this.state.todoItems.map((item,index)=>{
                        return <TodoItem todoItem={item} itemIndex={index} handleTodoDelete={this.handleTodoDelete} handleTodoUpdate={this.handleTodoUpdate}  key={index}/>
                  })
              }
                </div>
            </div>
        );
    }
}

export default TodoApp;
