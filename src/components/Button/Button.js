import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ color }) => color || '#ffd82b'};
  color: ${({ textColor }) => textColor || 'black'};
  width: 220px;
  height: ${({ height }) => height || '45px'};
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
