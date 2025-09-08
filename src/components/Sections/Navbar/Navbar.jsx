import { Menu } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className='w-full bg-[#fff] shadow-[0px_0px_24px_0px_#0000001F]'>
        <div className='w-[92%] m-auto gap-10 flex justify-between items-center py-2 md:py-5'>
            <div className='cursor-pointer'>
                <h1 className='lexend-bold text-[#3182ED] text-[48px]'>Evendo</h1>
            </div>
            <nav className='md:block'>
                <ul className='hidden md:flex gap-12'>
                    <li className='inline-block poppins-medium text-sm lg:text-xl  py-0 cursor-pointer'><NavLink to="/" className={({ isActive }) =>`${isActive ? 'text-[#3182ED]' : 'text-[#33333399]'}`}>Home</NavLink></li>
                    <li className='inline-block poppins-medium text-sm lg:text-xl  py-0 cursor-pointer  capitalize'><NavLink  to="/features" className={({ isActive }) =>`${isActive ? 'text-[#3182ED]' : 'text-[#33333399]'}`}>Features</NavLink></li>
                    <li className='inline-block poppins-medium text-sm lg:text-xl  py-0 cursor-pointer'> <NavLink  to="/pricing" className={({ isActive }) =>`${isActive ? 'text-[#3182ED]' : 'text-[#33333399]'}`}>Pricing</NavLink></li>
                    <li className='inline-block poppins-medium text-sm lg:text-xl  py-0 cursor-pointer'> <NavLink  to="/faqs" className={({ isActive }) =>`${isActive ? 'text-[#3182ED]' : 'text-[#33333399]'}`}>FAQ</NavLink></li>
                </ul>
            </nav>
            <div className='hidden md:flex items-center ml-4'>
                <li className='inline-block text-[#3182ED] poppins-medium text-sm lg:text-xl mx-2 cursor-pointer bg-[#3182ED14] py-[10px] px-9 rounded-[8px]'> <a  href="#">Sign In</a></li>
                <li className='inline-block text-[#fff] poppins-medium text-sm lg:text-xl mx-4 cursor-pointer bg-[#3182ED] py-[10px] px-5 rounded-[8px]'> <a  href="#">Get Started </a></li>
            </div>
            <div className='block md:hidden'>
                <Menu className='w-6 h-6' />
            </div>
        </div>
    </section>
  )
}

export default Navbar