import React from 'react';
import PropTypes from 'prop-types';
class Text extends React.Component {
    render(){
        return (
            <input className={this.props.className}
                   type="text"
                   ref={this.props.todoInputRef}
                   required={this.props.required}
                   onChange={e => {this.props.handleOnChange(e);}}
            />
        )
    }
}
export default Text;

Text.propTypes = {
    className: PropTypes.string,
    handleOnChange: PropTypes.func,
    required:PropTypes.bool,
    todoInputRef:PropTypes.element
};
Text.defaultProps = {
    className: 'Text',
    handleOnChange: e=>{
        console.error("Please provide error handler");
    },
    required:true,
    todoInputRef:null
};

