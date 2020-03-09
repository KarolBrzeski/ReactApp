/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
`;
const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const UserPageTemplate = ({ children, pageType, pageName }) => {
  return (
    <>
      <Sidebar pageType={pageType} />
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="Search..." />
          <StyledHeading big as="h1">
            {pageName}
          </StyledHeading>
          <StyledParagraph>12 notes </StyledParagraph>
        </StyledPageHeader>
        <StyleGrid>{children}</StyleGrid>
      </StyledWrapper>
    </>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  pageType: PropTypes.oneOf(['note', 'secondary', 'tertiary']),
  pageName: PropTypes.oneOf(['Notes', 'Twitters', 'Articles']),
};

export default UserPageTemplate;
