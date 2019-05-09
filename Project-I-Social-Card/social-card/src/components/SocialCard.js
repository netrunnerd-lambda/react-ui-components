import React from 'react';
import './SocialCard.css';

// components ...
import Header from './HeaderComponents/HeaderContainer';
import Card from './CardComponents/CardContainer';
// import Footer from './FooterComponents/Footer';

const SocialCard = props => (
  <section className="social-card">
    <Header content={ props.data.header } />
    <Card content={ props.data.card } />
  </section>
);

export default SocialCard;