import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;

        body {
            background-color: ${(props) => props.theme.backgroundColor};
        }
    }

    ::-webkit-scrollbar {
        width: 0.25rem;

        @media (max-width: 1023px) {
            display: none;
        }
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0.313rem ${(props) => props.theme.blue};
        border-radius: 0.5rem;
        margin-top: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.blue};
    }
`