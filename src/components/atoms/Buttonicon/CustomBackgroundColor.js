import styled from 'styled-components';

const CustomBackgroundColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme};
`;

export default CustomBackgroundColor;
