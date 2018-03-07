
import React from 'react';
import Text from '../commonComponents/Text.jsx';
import AddTodo from './AddTodo.jsx';

class TodoApp extends React.Component {
    constructor() {
        super();
        this.getEditInput = null;
        this.state = {
            todoItems:[]
        }
        this.handleOnChangeText = this.handleOnChangeText.bind(this);
        this.handleTodoAdd = this.handleTodoAdd.bind(this);

    }
    handleOnChangeText(evt){
        this.setState({todoText:evt.target.value});
    }
    handleTodoAdd(newTodo){
        debugger
        this.setState({
            todoItems: [...this.state.todoItems, newTodo]
        });
    }

    render(){
        return(
            <div>
              {/*<Text className="Text" refs={(input) => {this.getEditInput = input;}} handleOnChange={this.handleOnChangeText} />*/}
                <AddTodo handleTodoAdd={this.handleTodoAdd} />
              {
                  this.state.todoItems.map((item)=>{
                        return <li>{item.text}</li>
                  })
              }
            </div>
        );
    }
}

export default TodoApp;
