import styled from 'styled-components'

export const HeaderContainer = styled.div`
    max-width: 60rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.125rem 0.625rem;
    background-color: ${(props) => props.theme.backgroundColor};
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
    gap: 0.5rem;
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
    }

    span {
        color: ${(props) => props.theme.gray};
        font-size: 0.75rem;
    }
`