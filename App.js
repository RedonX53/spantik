import React from 'react';
import Splash from './app/navigation/splash_navigation';
import GlobalContextProvider from './app/contexts/global_context';

const App = () => {
  return (
    <GlobalContextProvider>
      <Splash />
    </GlobalContextProvider>
  );
};

export default App;
