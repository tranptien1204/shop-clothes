import React, { ChangeEvent, useContext, useMemo, useState } from 'react';
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';
import { ProductContext } from '../Context/ProductContext';

const Collection = () => {
    const prodCxt = useContext(ProductContext)
    const [categories, setCategories] = useState<string[]>([])
    const [sortProduct, setSortProduct] = useState('relevant')

    if (!prodCxt) return <p>Loading...</p>

    const { prodList } = prodCxt

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = e.target
        setCategories(prev =>
            checked
                ? [...prev, value]
                : categories.filter(item => item !== value)
        )
    }

    const filteredProducts = useMemo(() => {
        if (categories.length === 0) {
            return prodList
        }
        return prodList.filter(item => categories.includes(item.category))
    }, [categories, prodList])

    switch (sortProduct) {
        case 'relevant': filteredProducts
            break;
        case 'high-low':
            filteredProducts.sort((a, b): number => a.price - b.price)
            break;
        case 'low-high':
            filteredProducts.sort((a, b): number => b.price - a.price)
            break;
    }

    return (
        <div className="pt-10 border-t">
            <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-1/4">
                    <p
                        className="my-2 text-xl font-semibold flex items-center cursor-pointer">
                        FILTERS
                        <img
                            src={assets.dropdown_icon}
                            className={`h-3 sm:hidden `}
                            alt=""
                        />
                    </p>


                    <div className={`transition-all sm:block`}>
                        {/* Category Filter */}
                        <div className="border border-gray-300 rounded-lg p-4 my-4">
                            <p className="mb-3 text-sm font-medium px-1">CATEGORY</p>
                            <div className="flex flex-col gap-2 text-md font-light text-gray-700">
                                {/* Map through predefined categories */}
                                <p className="flex items-center gap-2">
                                    <input className="w-3" type="checkbox" value={'Men'}
                                        onChange={handleChange}
                                    /> Men
                                </p>
                                <p className="flex items-center gap-2">
                                    <input className="w-3" type="checkbox" value={'Women'}
                                        onChange={handleChange}
                                    /> Women
                                </p>
                                <p className="flex items-center gap-2">
                                    <input className="w-3" type="checkbox" value={'Kids'}
                                        onChange={handleChange}
                                    /> Kids
                                </p>
                            </div>
                        </div>

                        {/* <div className="border border-gray-300 rounded-lg p-4">
                            <p className="mb-3 text-sm font-medium px-1">TYPE</p>
                            <div className="flex flex-col gap-2 text-md font-light text-gray-700">
                                <p className="flex items-center gap-2">
                                    <input className="w-3" type="checkbox" value={'Topwear'}
                                    /> Shortsleeve
                                </p>
                                <p className="flex items-center gap-2">
                                    <input className="w-3" type="checkbox" value={'Bottomwear'}
                                    /> Tanktop
                                </p>
                                <p className="flex items-center gap-2">
                                    <input className="w-3" type="checkbox" value={'Winterwear'} /> Winterwear
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex justify-between text-base sm:text-2xl mb-4">
                        <Title text1="ALL" text2="COLLECTIONS" />
                        <select className="border border-gray-300 text-sm px-2"
                            onChange={(e) => setSortProduct(e.target.value)}
                        >
                            <option value="relevant">Sort by: Relevant</option>
                            <option value="high-low">Sort by: High to Low</option>
                            <option value="low-high">Sort by: Low to High</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                        {filteredProducts.map(item => (
                            <ProductItem key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
