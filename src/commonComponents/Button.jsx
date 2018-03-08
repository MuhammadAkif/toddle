import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render(){
        return (
            <input className={this.props.className}
                   type={this.props.type}
                   value={this.props.buttonText}
                   onClick={e => {if(!(this.props.type === "submit"))this.props.handleOnClick(e)}}
            />
        )
    }
}
export default Button;

Button.propTypes = {
    className: PropTypes.string,
    handleOnClick: PropTypes.func,
    type:PropTypes.string,
    buttonText:PropTypes.string
};
Button.defaultProps = {
    className: 'default-btn',
    handleOnClick: e=>{
        console.error("No function is provided");
    },
    type:"button",
    buttonText:""
};

