import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import Header from './Components/Header/Index';


function App(): JSX.Element {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
    </div>
  );
}

export default App;
