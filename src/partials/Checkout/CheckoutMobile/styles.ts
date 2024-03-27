import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    flex-direction: column;
    padding: 1rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme.white};
    max-height: calc(100vh - 10rem);
    display: none;

    @media (max-width: 1024px) {
        display: flex
    }
`

export const CheckoutScrollContainer = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;
`

export const CheckoutMobileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
`

export const CheckoutImage = styled.img`
    width: 4rem;
    height: 5.125rem;
`

export const CheckoutPriceTitle = styled.p`
    color: ${(props) => props.theme.gray};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
`

export const CheckoutTrashButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`

export const CheckoutTitleContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 1.5rem;
`

export const CheckoutValuesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 0.5rem;
`

export const CheckoutTopRightContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const CheckoutBottomRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`

export const CheckoutFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`