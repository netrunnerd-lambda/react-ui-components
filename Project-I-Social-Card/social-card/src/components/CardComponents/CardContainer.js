import React from 'react';
import './Card.css';

// components ...
import Banner from './CardBanner';
import Content from './CardContent';

const CardContainer = props => (
  <div className="card-container">
    <Banner src={ props.meta.imgUrl } alt={ props.meta.imgAlt } />
    <section className="card-content">
      <Content meta={ props.meta.text }/>
    </section>
  </div>
);

export default CardContainer;