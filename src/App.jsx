import React from 'react';

import { heroapi, highlight, popularsales, sneaker, toprateslaes } from './data/Data';
import FlexContent from './components/FlexContent';
import Hero from './components/Hero';
import Sales from './components/Sales';
   

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
