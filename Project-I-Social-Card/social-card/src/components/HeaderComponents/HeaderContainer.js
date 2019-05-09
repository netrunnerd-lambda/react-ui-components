import React from 'react';
import './Header.css';

import HeaderThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const date = new Date().toDateString().split(' '),
      month = date[1],
      day = date[2];

const i = {
  name: 'Lambda School',
  date: `${month} ${day}`,
  thumbAlt: 'a red Lambda School log',
  thumbUrl: 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png',
  content: "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"
};

const HeaderContainer = _ => {
  return (
    <div className="card-header">
      <HeaderThumbnail src={ i.thumbUrl } alt={ i.thumbAlt } />
      <section className="card-header-content">
        <HeaderTitle name={ i.name } date={ i.date } />
        <HeaderContent content={ i.content } />
      </section>
    </div>
  );
}

export default HeaderContainer;