import { Container } from '@components/Container'
import styled from 'styled-components'

export const CheckoutContainer = styled(Container)`
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 768px) {
        margin-top: 98px;
    }
`