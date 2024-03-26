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
    grid-template-columns: repeat(3, 19.313rem);
`

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 60rem;
    background-color: ${(props) => props.theme.white};
    border-radius: 8px;
    gap: 16px;
    padding: 16px;
`

export const Input = styled.input`
    flex: 1;
    border: 0;
    outline: none;
`

export const SearchButton = styled.button`
    border: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
`