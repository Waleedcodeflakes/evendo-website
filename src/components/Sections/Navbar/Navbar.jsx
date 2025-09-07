import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <section className='w-full bg-[#fff]'>
        <div className='w-[92%] m-auto gap-10 flex justify-between items-center py-2 md:py-5'>
            <div className='cursor-pointer'>
                <h1 className='lexend-bold text-[#3182ED] text-[48px]'>Evendo</h1>
            </div>
            <nav className='w-[70%]  md:block'>
                <ul className='hidden md:flex items-center justify-between w-full'>
                    <li className='inline-block text-[#3182ED] poppins-medium text-base lg:text-xl  py-0 cursor-pointer'><a  href="#">Home</a></li>
                    <li className='inline-block text-[#33333399] poppins-medium text-base lg:text-xl  py-0 cursor-pointer  capitalize'><a  href="#">Features</a></li>
                    <li className='inline-block text-[#33333399] poppins-medium text-base lg:text-xl  py-0 cursor-pointer'> <a  href="#">Pricing</a></li>
                    <li className='inline-block text-[#33333399] poppins-medium text-base lg:text-xl  py-0 cursor-pointer'> <a  href="#">Testimonials</a></li>
                    <li className='inline-block text-[#33333399] poppins-medium text-base lg:text-xl  py-0 cursor-pointer'> <a  href="#">FAQ</a></li>
                    <div className='flex items-center ml-4'>
                        <li className='inline-block text-[#3182ED] poppins-medium text-base lg:text-xl mx-2 cursor-pointer bg-[#3182ED14] py-[10px] px-9 rounded-[8px]'> <a  href="#">Sign In</a></li>
                        <li className='inline-block text-[#fff] poppins-medium text-base lg:text-xl mx-4 cursor-pointer bg-[#3182ED] py-[10px] px-5 rounded-[8px]'> <a  href="#">Get Started </a></li>
                    </div>
                </ul>
            </nav>
            <div className='block md:hidden'>
                <Menu className='w-6 h-6' />
            </div>
        </div>
    </section>
  )
}

export default Navbar