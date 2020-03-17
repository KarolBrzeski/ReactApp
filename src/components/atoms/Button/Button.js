import styled, { css } from 'styled-components';

const Button = styled.button`
  background: ${({ theme, color }) => (color ? `${color}` : theme.primary)};
  color: ${({ textColor }) => textColor || 'black'};
  width: 220px;
  height: ${({ height }) => height || '45px'};
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px;

  ${({ secondary }) =>
    secondary &&
    css`
      background: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
