import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import GlobalSyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalSyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello react</h1>
        <Button height="50px">Btn first</Button>
        <Button secondary>Btn second</Button>
        <Paragraph>Paragraph React</Paragraph>
        <Heading big>Hello Karol</Heading>
        <Heading>Hello Karol</Heading>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
