import styled from 'styled-components'

interface CardButtonProps {
    $active: boolean
}

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.625rem;
    max-width: 19.313rem;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.white};
    border-radius: 0.25rem;
`

export const CardImage = styled.img`
    width: 9.188rem;
    height: 11.75rem;
    margin-bottom: 0.5rem;
`

export const CardTitle = styled.strong`
    font-size: 0.625rem;
    color: ${(props) => props.theme.backgroundColor};
    margin-bottom: 0.125rem;
`

export const CardPrice = styled.strong`
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.backgroundColor};
    margin-bottom: 0.5rem;
`

export const CardButtonQuantityContainer = styled.div<CardButtonProps>`
    display: flex;
    justify-content: center;
    gap: 0.213rem;
    align-items: center;
    font-weight: 400;
`