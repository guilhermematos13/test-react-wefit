import styled from 'styled-components'

export const CounterContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;
`

export const CounterQuantityButtons = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
`

export const CounterQuantityInput = styled.input`
    max-width: 3.25rem;
    padding: 0.219rem 0.219rem 0.219rem 1rem;
    outline: none;
    border: 1px solid #d9d9d9;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme.backgroundColor};
    background-color: ${(props) => props.theme.white};
`

export const CounterQuantityIcons = styled.img`
    background-color: ${(props) => props.theme.white};
`