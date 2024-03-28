import styled, { keyframes } from 'styled-components';
import { LoadingProps } from './interface';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div<LoadingProps>`
  padding: ${({spacing}) => spacing === 'sm' ? '1.5rem' : '2.5rem'}
`;

export const Loading = styled.div`
  border: 2px solid #808080;
  border-top: 2px solid #FFFFFF;
  border-radius: 50%;
  width:  5.188rem;
  height: 5.188rem;
  animation: ${rotate} 1s linear infinite;
`;