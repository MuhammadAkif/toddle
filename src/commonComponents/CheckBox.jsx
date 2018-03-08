import React from 'react';
import PropTypes from 'prop-types';

class CheckBox extends React.Component {
    render(){
        return (
            <input className={this.props.className}
                   type="checkbox"
                   onClick={e => {this.props.handleOnClick(e)}}
            />
        )
    }
}
export default CheckBox;

CheckBox.propTypes = {
    className: PropTypes.string,
    handleOnClick: PropTypes.func,
    type:PropTypes.string
};
CheckBox.defaultProps = {
    className: 'default-btn',
    handleOnClick: e=>{
        console.error("No function is provided");
    },
    type:"button"
};

