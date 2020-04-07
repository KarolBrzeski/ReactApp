import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';

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

  ::first-letter {
    text-transform: uppercase;
  }
`;
const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const GridTemplate = ({ children, pageType, pageContext }) => {
  return (
    <UserPageTemplate pageType={pageType}>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="Search..." />
          <StyledHeading big as="h1">
            {pageContext}
          </StyledHeading>
          <StyledParagraph>12 {pageContext} </StyledParagraph>
        </StyledPageHeader>
        <StyleGrid>{children}</StyleGrid>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

GridTemplate.defaultProps = {
  pageType: 'primary',
};

export default withContext(GridTemplate);
