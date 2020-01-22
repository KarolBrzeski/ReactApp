import React from 'react';
import Button from 'components/Button/Button';
import GlobalSyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalSyle />
    <h1>Hello react</h1>
    <Button height="50px">Btn first</Button>
    <Button secondary>Btn second</Button>
  </div>
);

export default Root;
