import React from 'react';
import Text from '../commonComponents/Text.jsx';
import Button from '../commonComponents/Button.jsx';
import Checkbox from '../commonComponents/CheckBox.jsx';
import {Todo} from '../models/Todo';

class TodoItem extends React.Component {
    constructor() {
        super();
        this.todoInput = null;
        this.state = {
            todoText:'',
            edit:false,
        }
        this.handleOnChangeText = this.handleOnChangeText.bind(this);
        this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
        this.handleTodoDone = this.handleTodoDone.bind(this);
    }

    getInitialState(){
        return {
            todoText:'',
            edit:false
        }
    }
    handleOnChangeText(evt){
        this.setState({todoText:evt.target.value});
    }

    handleTodoUpdate(evt){
        evt.preventDefault();
        let id,text,done;
        ({id,text,done} = {id:this.props.todoItem.id,text:this.props.todoItem.text,done:this.props.todoItem.done});
        this.setState({edit:false});
        this.props.handleTodoUpdate(Object.assign({},new Todo(id,text,done)));
    }
    handleTodoDone(evt){
        this.props.todoItem.done = !this.props.todoItem.done;
        this.props.handleTodoUpdate(this.props.todoItem);
    }
    componentDidMount(){
        this.setState({todoText:this.props.todoItem.text});
    }
    render(){
        return(
             <div className="todoListItem">
                <form onSubmit={this.handleTodoUpdate}>
                    <Checkbox
                        checked={this.props.todoItem.done}
                        handleOnClick={this.handleTodoDone}
                    />
                    <Text className={!this.state.edit ? this.props.todoItem.done ? "crossText" : "simpleText" : "InputClass"}
                          key={1}
                          type={this.state.edit ? "Input" : "Text"}
                          text={this.state.todoText}
                          todoInputRef={input => this.todoInput = input}
                          handleOnChange={this.handleOnChangeText}
                    />
                    {(!this.state.edit) ?
                        (!this.props.todoItem.done) ?
                            <Button
                            className="btn"
                            key={0}
                            buttonText="Edit"
                            type="button"
                            handleOnClick={(e)=>{this.setState({edit:true})}}
                        /> : null
                        :
                        <Button
                            className="btn"
                            buttonText="Save"
                            key={5}
                            type="submit"
                        />}
                    <Button className="btn" buttonText="Delete" key={2} type="button" handleOnClick={()=>{this.props.handleTodoDelete(this.props.itemIndex);}} />
                </form>
            </div>
        );
    }
}

export default TodoItem;
