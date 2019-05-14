import React from 'react';
import './SocialCard.css';

// components ...
import Thumbnail from './HeaderComponents/ImageThumbnail';
import Header from './HeaderComponents/HeaderContainer';
import Card from './CardComponents/CardContainer';
import Footer from './FooterComponents/Footer';

const SocialCard = props => (
  <section className="social-card">
    <Thumbnail src={ props.meta.imgUrl } alt={ props.meta.imgAlt } />
    <section className="social-card-content">
      <Header meta={ props.meta.header.text } />
      <a href={ 'https://' + props.meta.card.text.url }>
        <Card meta={ props.meta.card } />
      </a>
      <Footer meta={ props.meta.footer } />
    </section>
  </section>
);

export default SocialCard;