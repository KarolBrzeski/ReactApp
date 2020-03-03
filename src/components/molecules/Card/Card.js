/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  min-height: 380px;
  max-width: 600px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px 15px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0 0;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 40px;
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>React Card</StyledHeading>
      <DateInfo>3 days ago</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <StyledParagraph>
        Vero diam labore tempor ipsum aliquyam ipsum et et magna. Lorem sit diam dolore vero. Sit
        invidunt sit clita stet. Ipsum duo consetetur dolores accusam eirmod duo, rebum et tempor
        sadipscing kasd kasd amet, sit labore voluptua sit kasd magna dolores ea dolor invidunt,
        tempor nonumy magna sadipscing aliquyam sadipscing est, elitr diam elitr nonumy lorem clita
        gubergren lorem kasd sadipscing, ipsum stet ipsum accusam ut labore lorem justo eirmod.
        Voluptua erat dolor est takimata, amet ea labore elitr ipsum sadipscing tempor ut sanctus.
        Sadipscing sit aliquyam et invidunt ut aliquyam, at et stet sed ea, kasd dolore dolor
        gubergren et ipsum ut ea, invidunt et dolor clita erat sanctus sadipscing tempor dolor
        takimata. Gubergren sea ea consetetur stet sanctus, voluptua et sed erat ipsum sadipscing
        lorem, dolor stet labore aliquyam amet sed.
      </StyledParagraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

Card.defaultProps = {
  cardType: 'primary',
};

export default Card;
