import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.secondary ? '#e6e6e6' : '#ffd82b')};
  width: ${props => (props.secondary ? '105px' : '220px')};
  height: ${props => (props.secondary ? '30px' : '47px')};
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 500px;
  font-size: ${props => (props.secondary ? '10px' : '16px')};
  text-transform: uppercase;
`;

export default Button;
