import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import RelatedProduct from '../Components/RelatedProduct';
import { ProductContext } from '../Context/ProductContext';

const Product = () => {
    const prodCtx = useContext(ProductContext)
    const [image, setImage] = useState('')
    const [size, setSize] = useState('')
    const [status, setStatus] = useState('Description')
    const { productId } = useParams()

    if (!prodCtx) return <p>Loading...</p>

    const { prodList } = prodCtx
    const productData = prodList.find(item => item._id === productId)


    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* product data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* product image */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between 
                    sm:justify-normal sm:w-[18.7%] w-full">
                        {productData.image.map((item: string, index: number) => (
                            <img src={item} key={index} onClick={() => setImage(item)}
                                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                        ))}
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img src={image || productData.image[0]} className="w-full h-auto" />
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} className='w-3.5' />
                        <img src={assets.star_icon} className='w-3.5' />
                        <img src={assets.star_icon} className='w-3.5' />
                        <img src={assets.star_icon} className='w-3.5' />
                        <img src={assets.star_dull_icon} className='w-3.5' />
                        <div className="pl-2">(122)</div>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>${productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {productData.sizes.map((item, index) => (
                                <button key={index} className={`border py-2 px-4 bg-gray-100 
                                    ${item === size ? 'border-orange-500' : ''}`}
                                    onClick={() => setSize(item)}>{item}</button>
                            ))}
                        </div>
                    </div>

                    <button
                        className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="flex">
                    <b className="border border-b-0 px-5 py-3 text-sm cursor-pointer"
                        onClick={() => setStatus('Description')}
                    >Description</b>
                    <b className="border border-b-0 px-5 py-3 text-sm cursor-pointer"
                        onClick={() => setStatus('Reviews')}
                    >Reviews</b>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    {status === 'Description'
                        ? <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptatum laborum nemo excepturi suscipit, tenetur natus soluta harum, error mollitia architecto, perferendis a optio ipsa voluptatibus ipsum? Illum, aperiam aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sed, molestiae, quasi suscipit quo culpa facere, rerum quis exercitationem facilis velit iste. Itaque dolorum officia architecto natus nulla quis laborum.
                        </p>
                        : <p>Review</p>}
                </div>
            </div>

            {/* <RelatedProduct category={productData.category} subCategory={productData.subCategory} /> */}
        </div>
    ) : <div className="opacity-0"></div>;
};

export default Product;
