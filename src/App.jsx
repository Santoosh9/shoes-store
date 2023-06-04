import React from 'react';

import { heroapi, highlight, popularsales, sneaker, toprateslaes } from './data/Data';
import { FlexContent, Hero, Sales } from './components';

const App = () => {
  return (
    <>
      <main>
        <Hero heroapi={heroapi}></Hero>
        <Sales endpoint={popularsales} ifExists />

        <FlexContent  endpoint={highlight}/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
      </main>
    </>
  );
};

export default App;
