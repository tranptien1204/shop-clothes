import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = ({ setShowSearch, showSearch }: SearchBarProps) => {

    return (
        <>
            <div className='flex items-center justify-between py-5 font-medium'>

                <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

                <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>

                    <NavLink to="/" className='flex flex-col items-center gap-1'>
                        <p>HOME</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
                    </NavLink>

                    <NavLink to="/collection" className='flex flex-col items-center gap-1'>
                        <p>COLLECTION</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>

                    <NavLink to="/about" className='flex flex-col items-center gap-1'>
                        <p>ABOUT</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>

                    <NavLink to="/contact" className='flex flex-col items-center gap-1'>
                        <p>CONTACT</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                </ul>


                <div className='flex items-center gap-6'>
                    <Link to={'/collection'}>
                        <img src={assets.search_icon} className='w-5 cursor-pointer'
                            onClick={() => setShowSearch(!showSearch)}
                        />
                    </Link>
                    <Link to={"/login"} className='relative'>
                        <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                    </Link>

                    <Link to="/cart" className="relative">
                        <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />

                        <p className='absolute right-[-5px] bottom-[-5px]  w-4 text-center leading-4 bg-black text-white
                         aspect-square rounded-full text-[8px]' >0</p>
                    </Link>

                    <img src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
                </div>
            </div>
        </>
    )
}

export default Navbar
