import React from 'react';
import './Card.css';

// components ...
import Banner from './CardBanner';
import Content from './CardContent';

const CardContainer = props => (
  <div className="card-container">
    <Banner src={ props.content.imgUrl } alt={ props.content.imgAlt } />
    <Content content={ props.content.text }/>
  </div>
);

export default CardContainer;