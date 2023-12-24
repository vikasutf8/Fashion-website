import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu2Line } from "react-icons/ri";




const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const handleChange = () => {
        setMenu(!menu)
    }

    const closeMenu =()=>{
        setMenu(false);
    }

    return (
        <header className='fixed w-full z-10'>
            <section>
                {/* desktop menu sections */}
                <div className='flex flex-row justify-between p-5 md:px-32 px-5  bg-PrimaryColor shadow-md'>
                    {/* logo */}
                    <div >
                        <Link to='home' spy={true} smooth={true} duration={500} >
                            <h1 className='text-2xl  font-semibold text-ExtraDarkColor cursor-pointer'>StyleNestle</h1>
                        </Link>
                    </div>
                    {/* nav elem,ent */}
                    <nav className='hidden  lg:flex flex-row items-center text-lg gap-8 font-semibold text-ExtraDarkColor'>
                        <Link to='home' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-black transition duration-300 ease-in-out hover:scale-110'>Home</Link>
                        <Link to='features' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-black transition duration-300 ease-in-out hover:scale-110'>Features</Link>
                        <Link to='shop' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-black transition duration-300 ease-in-out hover:scale-110'>Shop</Link>
                        <Link to='products' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-black transition duration-300 ease-in-out hover:scale-110'>Products</Link>
                        <Link to='review' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-black transition duration-300 ease-in-out hover:scale-110'>Review</Link>
                    </nav>

                    {/* nav icons */}
                    <div className='flex items-center gap-5 '>
                        <FaUser size={25} className='text-DarkColor' />
                        <div className='text-DarkColor relative'>
                            <FaShoppingCart size={25} className='cursor-pointer' />
                            <div className='absolute top-[-15px] right-[-10px] bg-red-600 w-[22px] h-[20px] rounded-full text-sm text-white grid place-items-center'>0</div>
                        </div>
                    </div>
                    {/* menu sections */}
                    <div className='lg:hidden flex items-center'>
                        {
                            menu ? <AiOutlineClose size={25} onClick={handleChange} /> : <RiMenu2Line size={25} onClick={handleChange} />
                        }
                    </div>
                </div>


                {/* mobile sections */}
                <div className={`${menu? "translate-x-0":"-translate-x-full"} lg:hidden flex flex-col items-center absolute bg-SecondaryColor text-black left-0 top-16 font-semibold text-2xl pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}>
                    <Link to='home' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-ExtraDarkColor transition duration-300 ease-in-out hover:scale-110' onClick={closeMenu}>Home</Link>
                    <Link to='features' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-ExtraDarkColor transition duration-300 ease-in-out hover:scale-110'onClick={closeMenu}>Features</Link>
                    <Link to='shop' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-ExtraDarkColor transition duration-300 ease-in-out hover:scale-110'onClick={closeMenu}>Shop</Link>
                    <Link to='products' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-ExtraDarkColor transition duration-300 ease-in-out hover:scale-110' onClick={closeMenu}>Products</Link>
                    <Link to='review' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-ExtraDarkColor transition duration-300 ease-in-out hover:scale-110' onClick={closeMenu}>Review</Link>
                </div>
            </section>
        </header>
    )
}

export default Navbar
