import React from 'react';
import { GlobalStyle, Main } from './Styles/GlobalStyle';
import Header from './Components/Header/Index';
import Home from './Components/Home';


function App(): JSX.Element {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Main>
        <Home/>
      </Main>
    </div>
  );
}

export default App;
