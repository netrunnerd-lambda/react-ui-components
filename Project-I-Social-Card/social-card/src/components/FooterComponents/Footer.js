import React from 'react';
import './Footer.css';

const FooterContainer = props => (
  <nav className="social-footer">
    <i className="far fa-comment"></i>
    <span><i className="fas fa-sync"></i> { props.meta.shares > 0 ? props.meta.shares : null }</span>
    <span><i className="far fa-heart"></i> { props.meta.likes > 0 ? props.meta.likes : null }</span>
    <i className="far fa-envelope"></i>
  </nav>
);

export default FooterContainer;