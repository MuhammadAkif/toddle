import React from 'react';
import Text from '../commonComponents/Text.jsx';
import Button from '../commonComponents/Button.jsx';
import {Todo} from '../models/Todo';
import {TodoUtils} from '../utils/utilityFunction.js';

class AddTodo extends React.Component {
    constructor() {
        super();
        this.getEditInput = null;
        this.todo = new Todo();
        this.todoInput = null;
        this.state = {
            todoText: '',
            value:""
        }
        this.handleOnChangeText = this.handleOnChangeText.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);

    }
    getInitialState(){
        return {
            todoText:""
        }
    }
    handleOnChangeText(evt){
        this.setState({todoText:evt.target.value});
    }

    handleAddTodo(evt){
        evt.preventDefault();
        TodoUtils.resetInput(this.todoInput);
        let id,text;
        ({id,text} = {id:Math.floor((Math.random() * 10000) + 1),text:this.state.todoText});
        this.todo = Object.assign({},new Todo(id,text));
        this.setState(this.getInitialState());
        this.props.handleTodoAdd(this.todo);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleAddTodo}>
                        <Text className="Text" key={0} text={this.state.todoText} todoInputRef={input => this.todoInput = input} handleOnChange={this.handleOnChangeText} />
                        <Button className="btn" key={1} type="submit" />
                </form>
            </div>
        );
    }
}

export default AddTodo;
