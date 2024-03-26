import styled from 'styled-components'

export const StatusContainer = styled.div`
    background-color: ${(props) => props.theme.white};
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    border-radius: 0.25rem;
    height: calc(100vh - 16rem);
`

export const StatusImage = styled.img`
    width: 27.938rem;
    height: 16.563rem;
`

export const StatusTitle = styled.h1`
    color: ${(props) => props.theme.backgroundColor};
    font-size: 1.25rem;
    text-align: center;
`