import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }: ProductItemProps) => {

    return (
        <Link className='text-gray700 cursor-pointer' to={`/product/${product._id}`} >
            <div className="overflow-hidden">
                <img className='hover:scale-110 transition ease-in-out' src={product.image[0]} alt="" />
            </div>
            <p className='pt-3 pb-1 text-sm'>{product.name}</p>
            <p className='font-medium text-sm'>${product.price}</p>
        </Link>
    );
};

export default ProductItem;