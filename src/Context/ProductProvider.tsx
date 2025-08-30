import { useEffect, useState } from "react"
import axios from "axios"
import { ProductContext } from "./ProductContext"

const ProductProvider = ({ children }: ProductProviderProps) => {
    const [prodList, setProdList] = useState([])
    const urlApiProd = import.meta.env.VITE_URL_API_PROD

    const getApiProd = async () => {
        const res = await axios.get(urlApiProd)
        const handleData = res.data.map((item: ProductListType) => ({
            ...item,
            image: Array.isArray(item.image) ? item.image : [item.image]
        }))
        setProdList(handleData)
    }

    useEffect(() => {
        getApiProd()
    }, [])

    const cxtValue: ProductContextType = {
        prodList,
        getApiProd
    }

    return (
        <ProductContext.Provider value={cxtValue}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider