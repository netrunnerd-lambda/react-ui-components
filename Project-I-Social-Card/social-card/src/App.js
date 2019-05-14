import React from 'react';
import './App.css';

// components ...
import SocialCard from './components/SocialCard';

// data ...
import posts from './SomeData';

const App = _ => (
  <React.Fragment>
    <header>
      <h1>Lambda School Dev Feed</h1>
      <nav>
        <a href="about/">About</a>
        <a href="contact/">Contact</a>
      </nav>
    </header>
    <main>
      { posts.map(post => <SocialCard meta={post} key={ post.card.text.url } />) }
    </main>
    <footer>
      © 2019 Lambda School All Rights Reserved
    </footer>
  </React.Fragment>
);

export default App;
