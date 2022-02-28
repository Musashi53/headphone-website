import React from 'react';
import { GlobalStyle, Main } from './Styles/GlobalStyle';
import Header from './Components/Header/Index';
import Home from './Components/Home';
import Sponsor from './Components/Sponsor/index';
import Specs from './Components/Specs/index';
import Case from './Components/Case';
import Discount from './Components/Discount';
import Products from './Components/Products';
import Footer from './Components/Footer';
import ScrollUp from './Components/Scroll Up';

function App(): JSX.Element {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Main>
        <Home/>
        <Sponsor/>
        <Specs/>
        <Case/>
        <Discount/>
        <Products/>
      </Main>
      <Footer/>
      <ScrollUp/>
    </div>
  );
}

export default App;
