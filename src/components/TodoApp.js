import React from 'react';
import AddTodo from './AddTodo.jsx';
import TodoListItem from './TodoListItem.jsx';

class TodoApp extends React.Component {
    constructor() {
        super();
        this.getEditInput = null;
        this.state = {
            todoItems:[]
        }
        this.handleTodoAdd = this.handleTodoAdd.bind(this);
        this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
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
    render(){
        return(
            <div>
                <AddTodo handleTodoAdd={this.handleTodoAdd} />
              {
                  this.state.todoItems.map((item,index)=>{
                        return <TodoListItem todoItem={item} handleTodoUpdate={this.handleTodoUpdate}  key={index}/>
                  })
              }
            </div>
        );
    }
}

export default TodoApp;
