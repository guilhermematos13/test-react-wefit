import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 1.5rem 1rem;

    @media (max-width: 768px) {
        padding: 1.5rem 1rem;
    }

    @media (min-width: 1024px) {
        padding: 0rem 5.5rem;
    }

    @media (min-width: 1200px) {
        padding: 0rem 11.25rem;
    }
`