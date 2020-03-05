import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalSyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Sidebar from 'components/organisms/Sidebar';

const MainTemplate = ({ children }) => (
  <div>
    <GlobalSyle />
    <ThemeProvider theme={theme}>
      <>
        <Sidebar />
        {children}
      </>
    </ThemeProvider>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainTemplate;
