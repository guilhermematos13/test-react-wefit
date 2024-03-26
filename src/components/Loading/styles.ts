import styled, { keyframes } from 'styled-components';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  border: 2px solid #808080;
  border-top: 2px solid #FFFFFF;
  border-radius: 50%;
  width: 83px;
  height: 83px;
  animation: ${rotate} 1s linear infinite;
`;