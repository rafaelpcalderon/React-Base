import React from "react";
import PropTypes from 'prop-types'

import './Button.css'
function Button(props){
    return(
      <button className="btn" onClick={ () => alert('A label deste botão é: ' + props.label)}>
          {props.label}
      </button>  
    );
}

Button.PropTypes = {
    label: PropTypes.string.isRequired,
}

export default Button;
