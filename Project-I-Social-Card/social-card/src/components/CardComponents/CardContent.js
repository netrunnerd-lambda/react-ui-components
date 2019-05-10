import React from 'react';
import './Card.css';

const CardContent = props => (
  <React.Fragment>
    <h3>{ props.meta.heading }</h3>
    <p>{ props.meta.content }</p>
    <span>{ props.meta.url }</span>
  </React.Fragment>
);

export default CardContent;