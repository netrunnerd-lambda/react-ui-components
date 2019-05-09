import React from 'react';
import './Header.css';

import HeaderThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = _ => {
  return (
    <React.Fragment>
      <HeaderThumbnail src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt="Lambda School Logo" />
      <section>
        <HeaderTitle />
        <HeaderContent />
      </section>
    </React.Fragment>
  );
}

export default HeaderContainer;