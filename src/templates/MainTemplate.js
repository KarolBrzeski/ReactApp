import React, { Component } from 'react';
import PageContext from 'context/index';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalSyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

class MainTemplate extends Component {
  constructor() {
    super();
    this.state = {
      pageType: 'notes',
    };
  }

  // eslint-disable-next-line react/sort-comp
  setCurrentPage = (prevState = '') => {
    const pageTypes = ['twitters', 'articles', 'notes'];

    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
    }
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  render() {
    const { children } = this.props;
    const { pageType } = this.state;
    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalSyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MainTemplate);
