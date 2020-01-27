import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalSyle from 'theme/GlobalStyle';

const theme = {
  primary: '#ffd82b',
};

const Root = () => (
  <div>
    <GlobalSyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello react</h1>
        <Button height="50px">Btn first</Button>
        <Button secondary>Btn second</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
