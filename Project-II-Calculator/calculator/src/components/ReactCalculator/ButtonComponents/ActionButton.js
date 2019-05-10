import React from 'react';
import './Button.css';

const ActionButton = props => <button className={ 'action-button ' + props.buttonStyle }>{ props.text }</button>;

export default ActionButton;