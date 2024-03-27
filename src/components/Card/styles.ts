import styled from 'styled-components'

interface CardButtonProps {
    $active: boolean
}

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    max-width: 21.125rem;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.white};
    border-radius: 0.25rem;
`

export const CardImage = styled.img`
    width: 9.188rem;
    height: 11.75rem;
`

export const CardTitle = styled.strong`
    font-size: 0.75rem;
    color: ${(props) => props.theme.backgroundColor};
`

export const CardPrice = styled.strong`
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.backgroundColor};
`

export const CardButtonQuantityContainer = styled.div<CardButtonProps>`
    display: flex;
    justify-content: center;
    gap: 0.213rem;
    align-items: center;
    font-weight: 400;
`