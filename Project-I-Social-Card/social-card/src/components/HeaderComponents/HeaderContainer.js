import React from 'react';
import './Header.css';

// components ...
import Title from './HeaderTitle';
import Content from './HeaderContent';

const HeaderContainer = props => (
  <div className="social-header">
    <Title name={ props.meta.title } date={ props.meta.date } />
    <Content meta={ props.meta.content } />
  </div>
);

export default HeaderContainer;