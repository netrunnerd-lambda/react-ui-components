import React from 'react';
import './Card.css';

const CardContent = props => (
  <React.Fragment>
    <h3>{ props.content.heading }</h3>
    <p>{ props.content.paragraph }</p>
    <a href={ 'https://' + props.content.url }>{ props.content.url }</a>
  </React.Fragment>
);

export default CardContent;