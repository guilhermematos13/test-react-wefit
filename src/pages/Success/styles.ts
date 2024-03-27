import { Container } from '@components/Container'
import styled from 'styled-components'

export const SuccessContainer = styled(Container)`
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        margin-top: 2rem;
    }
`