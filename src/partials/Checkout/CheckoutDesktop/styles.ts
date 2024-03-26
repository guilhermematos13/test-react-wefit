import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    background-color: ${(props) => props.theme.white};
    border-radius: 0.25rem;
    padding: 1.5rem;
`

export const CheckoutGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 112px 2fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 3.25rem;
    margin-bottom: 1.313rem;
`

export const CheckoutScrollContainer = styled.div`
    overflow: auto;
    max-height: 50vh;
`

export const CheckoutTitle = styled.p`
    color: ${(props) => props.theme.gray};
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
`

export const CheckoutImage = styled.img`
    max-width: 5.625rem;
`

export const CheckoutMovieTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: start;
    justify-content: center;
`

export const CheckoutTrashButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 1rem;
`

export const CheckoutFooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.313rem;
`