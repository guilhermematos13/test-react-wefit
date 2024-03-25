import { ReactNode } from 'react'

export interface ButtonProps extends ButtonStyledProps {
    children: ReactNode
    onClick: () => void
}

export interface ButtonStyledProps {
    $full?: boolean
    $active?: boolean
}