import styled, { css } from 'styled-components';
import { theme } from 'theme/mainTheme';

const Button = styled.button`
 ${({ type }) =>
   (type === 'primary' || type === 'notes' || type === undefined) &&
   css`
     background: ${theme.primary};
   `}

  ${({ type }) =>
    (type === 'secondary' || type === 'twitters') &&
    css`
      background: ${theme.secondary};
    `}

  ${({ type }) =>
    (type === 'tertiary' || type === 'articles') &&
    css`
      background: ${theme.tertiary};
    `} 

  background: ${({ color }) => `${color}`};

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
  :active, :visited, :focus, :hover, :checked{
    outline:none;
  }

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
