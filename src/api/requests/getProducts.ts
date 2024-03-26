import { api } from '@api/axios'

export interface IGetProductsResponse {
    id: number
    title: string
    price: number
    image: string
    quantity?: number
}

export const getProducts = async () => {
    const { data: response } = await api.get(`products`)

    return response as IGetProductsResponse[]
}