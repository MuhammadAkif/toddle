import React from 'react';
import PropTypes from 'prop-types';
class Text extends React.Component {
    render(){
        return (
            this.props.type === "Input" ?
                <input className={this.props.className}
                                      type="text"
                                      ref={this.props.todoInputRef}
                                      placeholder="Please Enter Todo Items"
                                      required={this.props.required}
                                      value={this.props.text}
                                      onChange={e => {
                                          this.props.handleOnChange(e);
                                      }}
                                />
                            :

                <span>{this.props.text}</span>
        )
    }
}
export default Text;

Text.propTypes = {
    className: PropTypes.string,
    handleOnChange: PropTypes.func,
    required:PropTypes.bool,
    type:PropTypes.oneOf(['Text','Input']),
    text:PropTypes.string
};
Text.defaultProps = {
    className: 'Text',
    handleOnChange: e=>{
        console.error("Please provide error handler");
    },
    required:true,
    todoInputRef:null,
    type:'Input',
    text:""
};

