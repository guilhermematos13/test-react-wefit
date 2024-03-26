import styled from 'styled-components'

export const CheckoutMovieTitle = styled.p`
    font-size: 0.875rem;
    font-weight: 700;
    color: ${(props) => props.theme.backgroundColor};
`

export const CheckoutMoviePrice = styled.p`
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.backgroundColor};
`

export const CheckoutDivider = styled.hr`
    margin-top: 1.313rem;
    margin-bottom: 1.313rem;
`

export const CheckoutTrashButton = styled.button`
    background-color: ${(props) => props.theme.white};
    width: 1.5rem;
    height: 1.5rem;
    border: 0;
    cursor: pointer;
`

export const CheckoutTotalText = styled.p`
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.backgroundColor};
`

export const CheckoutFooterValueText = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.backgroundColor};
`

export const CheckoutFooterTotalText = styled.p`
    font-size: 0.875rem;
    font-weight: 700;
    color: ${(props) => props.theme.gray};
`

export const CheckoutFooterTotalContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`