import styled from 'styled-components'
import { ButtonStyledProps } from './interface'

export const Button = styled.button<ButtonStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: ${({ $full }) => ($full ? '100%' : 'auto')};
    background-color: ${({ theme, $active }) =>
        $active ? theme.green : theme.blue};
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    border: 0;
    border-radius: 0.25rem;
    padding: ${({ $full }) => ($full ? '0.75rem 0' : '0.75rem 3.75rem')};
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 700;

    &:hover,
    &:active {
        background-color: ${({ theme, $active }) =>
            $active ? theme.greenHover : theme.blueHover};
        transition: 0.5s;
    }
`