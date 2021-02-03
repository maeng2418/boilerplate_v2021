import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from 'styles/theme';
import Normalize from 'styles/Nomalize';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { AtomSample } from 'components';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Router>
        <div className="App">Maeng's Design System</div>
        <AtomSample borderColor={'light-red-700'} backgroundColor={'light-green-500'} />
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
