import styled from 'styled-components'

export const StatusContainer = styled.div`
    background-color: ${(props) => props.theme.white};
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    height: calc(100vh - 9rem);
`

export const StatusTitle = styled.h1`
    color: ${(props) => props.theme.backgroundColor};
    font-size: 1.25rem;
    text-align: center;
`