import styled from 'styled-components'

export const HeaderContainer = styled.div`
    max-width: 65.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.938rem 0rem;
    background-color: ${(props) => props.theme.backgroundColor};

    @media (max-width: 768px) {
        width: 100%;
        padding: 1.938rem 1rem;
        position: fixed;
        right: 0;
        top: 0;
        left: 0;
        z-index: 10;
    }
`

export const PageTitleButton = styled.button`
    font-size: 1.25rem;
    color: ${(props) => props.theme.white};
    border: 0;
    cursor: pointer;
    font-weight: 700;
    background: none;
`

export const MyCartButton = styled.button`
    display: flex;
    gap: 1rem;
    border: 0;
    align-items: center;
    cursor: pointer;
    background: none;
`

export const MyCartTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    p {
        color: ${(props) => props.theme.white};
        font-size: 0.875rem;
        font-weight: 600;

        @media (max-width: 425px) {
        display: none
    }
    }

    span {
        color: ${(props) => props.theme.gray};
        font-size: 0.75rem;
    }
`