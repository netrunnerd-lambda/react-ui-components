import React from 'react';
import './Header.css';

const ImageThumbnail = props => <img srcSet={ props.src } alt={ props.alt } />;

export default ImageThumbnail;