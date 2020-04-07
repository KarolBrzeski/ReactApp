import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
import { addItem as addItemAction } from 'actions/index';
import styled, { css } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`

transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
transition: transform .4s ease-in-out;
border-left: 10px solid;
border-image-slice: 1;

${({ type }) =>
  (type === 'notes' || type === undefined) &&
  css`
    border-image-source: ${theme.primary};
  `}

  ${({ type }) =>
    type === 'twitters' &&
    css`
      border-image-source: ${theme.secondary};
    `}

  ${({ type }) =>
    type === 'articles' &&
    css`
      border-image-source: ${theme.tertiary};
    `} 
    
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-bottom: 30px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => (
  <StyledWrapper isVisible={isVisible} type={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <StyledInput
      placeholder={pageContext === 'twitters' ? 'Account Name eg. Karol Nowak' : 'Title'}
    />
    {pageContext === 'articles' && <Input placeholder="link" />}

    <StyledTextArea as="textarea" placeholder="title" />
    <Button
      type={pageContext}
      onClick={() =>
        addItem(pageContext, {
          title: 'Hello React',
          content: 'Lorem lorem lorencium testunio reactunio',
        })
      }
    >
      Add {pageContext}
    </Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
