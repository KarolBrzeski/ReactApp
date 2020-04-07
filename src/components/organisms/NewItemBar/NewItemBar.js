import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`

transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
transition: transform .4s ease-in-out;

${({ type }) =>
  (type === 'notes' || type === undefined) &&
  css`
    border-left: 10px solid #2cb978;
  `}

  ${({ type }) =>
    type === 'twitters' &&
    css`
      border-left: 10px solid #2196f3;
    `}

  ${({ type }) =>
    type === 'articles' &&
    css`
      border-left: 10px solid #cddc39;
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

const NewItemBar = ({ pageContext, isVisible }) => (
  <StyledWrapper isVisible={isVisible} type={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <StyledInput
      placeholder={pageContext === 'twitters' ? 'Account Name eg. Karol Nowak' : 'Title'}
    />
    {pageContext === 'articles' && <Input placeholder="link" />}

    <StyledTextArea as="textarea" placeholder="title" />
    <Button type={pageContext}>Add {pageContext}</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(NewItemBar);
