
interface ProductListType {
    _id: string
    name: string
    image: string[]
    price: number
    bestseller: boolean
    description: string
    sizes: string[]
    category: string
}

interface ProductContextType {
    prodList: ProductListType[]
    getApiProd: () => void
}

interface ProductProviderProps {
    children: React.ReactNode
}

interface ProductItemProps {
    product: ProductListType
}

interface SearchBarProps {
    setShowSearch: (value: boolean) => void
    showSearch: boolean
}