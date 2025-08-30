import Title from './Title';
import ProductItem from './ProductItem';
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';


const BestSelleer = () => {
    const prodContext = useContext(ProductContext)

    if (!prodContext) return <p>Loading...</p>

    const { prodList } = prodContext
    const prodSeller = prodList.filter(item => item.bestseller)

    return (
        <>
            <div className="py-10">
                <div className="text-center py-8 text-3xl">
                    <Title text1="BEST" text2="SELLERS" />
                    <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                        Lorem ipsum dolor sit amet, adipisicing elit. Best seller
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                    {prodSeller.map(item => (
                        <ProductItem key={item._id} product={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default BestSelleer
