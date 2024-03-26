import { IGetProductsResponse } from '@api/requests/getProducts'
import { ReactNode } from 'react'

export interface CheckoutContextProps {
    products: IGetProductsResponse[]
    setProducts: React.Dispatch<React.SetStateAction<IGetProductsResponse[]>>
    addProduct: (product: IGetProductsResponse) => void
    getTotalItems: () => number
    removeProduct: (id: number) => void
    updateQuantity: (id: number, amount: number) => void
    getTotalPrice: () => number
    getTotalItemsById: (id: number) => number
    getTotalPriceById: (id: number) => number
}

export interface TransactionProviderProps {
    children: ReactNode
}