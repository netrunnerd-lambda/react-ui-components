import React from 'react';
import './Header.css';

const HeaderTitle = props => <h2>{ props.name } <span>@{ props.name } · { props.date }</span></h2>;

export default HeaderTitle;