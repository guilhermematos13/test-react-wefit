import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: ${(props) => props.theme.white};
    border-radius: 8px;
    gap: 16px;
    padding: 16px;
    position: relative;

    &:focus-within::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid ${(props) => props.theme.blue};
        border-radius: 8px;
        pointer-events: none;
    }

    @media (max-width: 768px) {
        max-width: 21.125rem;
    }

    @media (min-width: 768px) {
        max-width: 42.250rem;
    }

    @media (min-width: 1024px) {
        max-width: 65.5rem;

    }
`;

export const Input = styled.input`
    flex: 1;
    border: 0;
    outline: none;
`;

export const SearchButton = styled.button`
    border: 0;
    padding: 0 0.25rem;
    border-radius: 0.5rem;
    background-color: transparent;
    cursor: pointer;
    &:focus {
        outline-style: solid;
        outline-color: ${(props) => props.theme.blue};
        outline-width: 2px;
    }
`;