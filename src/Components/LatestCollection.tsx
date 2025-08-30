import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import ProductItem from './ProductItem';
import { ProductContext } from '../Context/ProductContext';


const LatestCollection = () => {
    const prodContext = useContext(ProductContext)

    if (!prodContext) return <p>Loading...</p>

    const { prodList } = prodContext
    const prodLatest = prodList.filter(item => !item.bestseller)

    return (
        <>
            <div className='my-10'>
                <div className='text-center py-8 text-3xl'>
                    <Title text1={"LATEST"} text2={"COLLECTIONS"} />
                    <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. collection</p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {prodLatest.map(item => (
                        <ProductItem key={item._id} product={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default LatestCollection
