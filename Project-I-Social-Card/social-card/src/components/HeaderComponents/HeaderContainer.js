import React from 'react';
import './Header.css';

// components ...
import Thumbnail from './ImageThumbnail';
import Title from './HeaderTitle';
import Content from './HeaderContent';

const HeaderContainer = props => (
  <div className="social-header">
    <Thumbnail src={ props.content.imgUrl } alt={ props.content.imgAlt } />
    <section className="social-header-content">
      <Title name={ props.content.title } date={ props.content.date } />
      <Content content={ props.content.copy } />
    </section>
  </div>
);

export default HeaderContainer;