import React from 'react';
import Main from './pages/main';
import ColorModeSwitcher from './components/color-mode-switcher';

const App = () => {

  return (
    <>
      <ColorModeSwitcher />
      <Main />
    </>
  );
};

export default App;
