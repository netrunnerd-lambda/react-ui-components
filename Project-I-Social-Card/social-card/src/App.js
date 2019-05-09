import React from 'react';
import './App.css';

// components
import SocialCard from './components/SocialCard';

// data
import Content from './SomeData';

const App = _ => (
  <React.Fragment>
    <header>
      <h1>Lambda School Dev Feed</h1>
      <nav>
        <a href="about/">About</a>
        <a href="contact/">Contact</a>
      </nav>
    </header>
    <main className="feed">
      <SocialCard data={ Content['react'] } />
      <SocialCard data={ Content['react'] } />
      <SocialCard data={ Content['react'] } />
    </main>
    <footer>
      © 2019 Lambda School All Rights Reserved
    </footer>
  </React.Fragment>
);

export default App;
