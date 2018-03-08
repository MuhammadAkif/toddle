import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render(){
        return (
            <input className={this.props.className}
                   type={this.props.type}
                   value={this.props.buttonText}
                   onClick={e => {(this.props.type === "submit") ?  null : this.props.handleOnClick(e)}}
            />
        )
    }
}
export default Button;

Text.propTypes = {
    className: PropTypes.string,
    handleOnClick: PropTypes.func,
    type:PropTypes.string,
    buttonText:PropTypes.string
};
Text.defaultProps = {
    className: 'default-btn',
    handleOnClick: e=>{
        console.error("No function is provided");
    },
    type:"button",
    buttonText:""
};

