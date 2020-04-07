import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/Buttonicon/Buttonicon';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import plusIcon from 'assets/icons/plus.svg';
import backIcon from 'assets/icons/back.svg';
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

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  z-index: 19999;
  bottom: 40px;
  right: 40px;
  border-radius: 50px;
  background-size: 35%;
  border: 5px dotted rgba(131, 232, 90, 0.92);
`;

class GridTemplate extends Component {
  constructor() {
    super();
    this.state = {
      isNewItemBarVisible: false,
    };
  }

  handleNewItemBarToggle = () => {
    this.setState(prevState => ({ isNewItemBarVisible: !prevState.isNewItemBarVisible }));
  };

  render() {
    const { children, pageType, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;

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
          <StyledButtonIcon
            icon={isNewItemBarVisible === true ? backIcon : plusIcon}
            onClick={this.handleNewItemBarToggle}
          />
          <NewItemBar isVisible={isNewItemBarVisible} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

GridTemplate.defaultProps = {
  pageType: 'primary',
};

export default withContext(GridTemplate);
