/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar';

const UserPageTemplate = ({ children, pageType }) => {
  return (
    <>
      <Sidebar pageType={pageType} />
      {children}
    </>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

export default UserPageTemplate;
