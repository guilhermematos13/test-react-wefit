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


    @media (max-width: 1024px) {
        width: 1rem;
        height: 1rem;
    }
`

export const CheckoutTotalText = styled.p`
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.backgroundColor};

    @media (min-width: 1024px) {
        padding: 0 1rem;
    }
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

    @media (min-width: 1024px) {
        padding: 0 0.75rem;
    }

    @media (max-width: 1023px) {
        margin-bottom: 1rem;
        justify-content: space-between;
        width: 100%;
    }
`