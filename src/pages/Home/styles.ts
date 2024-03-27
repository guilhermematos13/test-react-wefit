import { Container } from '@components/Container'
import styled from 'styled-components'

export const HomeContainer = styled(Container)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const GridContainer = styled.div`
    display: grid;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
    grid-template-columns: repeat(3, 21.167rem);
`

export const LoadingContainer = styled.div`
    padding: 1.5rem 0
`