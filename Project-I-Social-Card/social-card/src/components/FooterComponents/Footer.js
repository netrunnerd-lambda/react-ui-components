import React from 'react';
import './Footer.css';

const shares = Math.floor(Math.random() * 15),
      likes = Math.floor(Math.random() * 20);

const FooterContainer = _ => (
  <nav className="social-footer">
    <i class="far fa-comment"></i>
    <span><i class="fas fa-sync"></i> { shares > 0 ? shares : null }</span>
    <span><i class="far fa-heart"></i> { likes > 0 ? likes : null }</span>
    <i class="far fa-envelope"></i>
  </nav>
);

export default FooterContainer;