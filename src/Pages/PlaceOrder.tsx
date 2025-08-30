// import React, { useContext, useState } from 'react';
// import Title from '../Components/Title';
// import CartTotal from '../Components/CartTotal';
// import { assets } from '../assets/assets';
// import { ShopContext } from '../Context/ShopContext';
// import { toast } from 'react-toastify';

// const PlaceOrder = () => {
//     const [method, setMethod] = useState('cod')
//     const { navigate } = useContext(ShopContext)

//     return (
//         <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//             <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
//                 <div className='text-xl sm:text-2xl my-3'>
//                     <Title text1={'DELIVERY'} text2={'INFOMATION'} />
//                 </div>

//                 <div className="flex gap-3">
//                     <input required type="text" placeholder='Firstname'
//                         className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
//                     <input required type="text" placeholder='Lastname'
//                         className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
//                 </div>

//                 <input required type="email" placeholder='Email'
//                     className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

//                 <input required type="email" placeholder='Street'
//                     className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

//                 <div className="flex gap-3">
//                     <input required type="text" placeholder='City'
//                         className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
//                     <input required type="text" placeholder='State'
//                         className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
//                 </div>

//                 <div className="flex gap-3">
//                     <input required type="number" placeholder='Zipcode'
//                         className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
//                     <input required type="text" placeholder='Country'
//                         className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
//                 </div>

//                 <input required type="number" placeholder='Phone'
//                     className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
//             </div>
//             <div className="mt-8">
//                 <div className="mt-8 min-w-80">
//                     <CartTotal />
//                 </div>
//                 <div className="mt-12">
//                     <Title text1={'PAYMENT'} text2={'METHOD'} />
//                     <div className="flex flex-col gap-3 lg:flex-row">
//                         <div onClick={() => setMethod('stripe')}
//                             className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//                             <p className={`min-w-3.5 h-3.5 border rounded-full 
//                                 ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//                             <img src={assets.stripe_logo} className="h-5 mx-4" />
//                         </div>
//                         <div onClick={() => setMethod('razorpay')}
//                             className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//                             <p className={`min-w-3.5 h-3.5 border rounded-full 
//                                 ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//                             <img src={assets.razorpay_logo} className="h-5 mx-4" />
//                         </div>
//                         <div onClick={() => setMethod('cod')}
//                             className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//                             <p className={`min-w-3.5 h-3.5 border rounded-full 
//                                 ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//                             <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full text-end mt-8">
//                     <button onClick={() => navigate('/order')} type='submit'
//                         className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PlaceOrder;  