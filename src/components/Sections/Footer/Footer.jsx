import React from 'react'
import app from '../../../assets/img/app-store.svg'
import play from '../../../assets/img/google-play.svg'
import twitter from '../../../assets/icons/twitter.svg'
import github from '../../../assets/icons/github.svg'
import linkedin from '../../../assets/icons/linkedin.svg'
import victory from '../../../assets/icons/victory.svg'
import fb from '../../../assets/icons/fb.svg'
import globe from '../../../assets/icons/globe.svg'
import { useNavigate } from 'react-router-dom'
import { Facebook, Linkedin, LinkedinIcon, Twitter } from 'lucide-react'

const Footer = () => {

    const navigate = useNavigate();
  return (
    <section className='w-full bg-[#3182ED14]'>
        <div className='w-[92%] m-auto'>
            <div className='flex-wrap md:flex justify-between'>
                <div className='py-6'>
                    <h3 className='lexend-bold text-[48px] text-[#3182ED]'>Evendo</h3>
                    <p className='poppins-regular text-[16px] text-[#333] mt-2'>The Complete platform for event managers to <br/> streamline vendor relationships, communication, and e...</p>
                <div className='py-6 flex-wrap md:flex gap-6'>
                    <p onClick={() => navigate('/')} className='poppins-semibold text-[16px] text-[#3182ED] cursor-pointer'>Overview</p>
                    <p onClick={() => navigate('/featured')} className='poppins-semibold text-[16px] text-[#3182ED] cursor-pointer'>Features</p>
                    <p onClick={() => navigate('/pricing')} className='poppins-semibold text-[16px] text-[#3182ED] cursor-pointer'>Pricing</p>
                    <p onClick={() => navigate('/faqs')} className='poppins-semibold text-[16px] text-[#3182ED] cursor-pointer'>FAQ</p>
                    <p onClick={() => navigate('/help')} className='poppins-semibold text-[16px] text-[#3182ED] cursor-pointer'>Help</p>
                    <p onClick={() => navigate('/privacy')} className='poppins-semibold text-[16px] text-[#3182ED] cursor-pointer'>Privacy</p>
                </div>
                </div>
                <div className='py-8 flex flex-col items-start gap-4 pl-5'>
                    <p className='poppins-medium text-[16px] text-[#333]'>Get the app</p>
                    <img src={app} alt="play button link" />
                    <img src={play} alt="play button link" />
                </div>
            </div>
            <hr className='text-[#d4d5d9] h-[2px]' />
            <div className='flex-wrap md:flex w-full justify-between py-8'>
                <div><p>© 2025 Evendo. All rights reserved.</p></div>
                <div className='flex gap-6 mt-5 sm:mt-0'>
                    <img className='cursor-pointer' src={twitter} alt="social icon" />
                    <img className='cursor-pointer' src={linkedin} alt="social icon" />
                    <img className='cursor-pointer' src={fb} alt="social icon" />
                    <img className='cursor-pointer' src={github} alt="social icon" />
                    <img className='cursor-pointer' src={victory} alt="social icon" />
                    <img className='cursor-pointer' src={globe} alt="social icon" />
                    {/* <Twitter className={`cursor-pointer text-[#999999] hover:fill-[#3182ED] hover:text-[#3182ED] `} fill="#999999"  />
                    <LinkedinIcon className={`cursor-pointer text-[#999999] hover:fill-[#3182ED] hover:text-[#3182ED] `} fill="#999999"  />
                    <Facebook className={`cursor-pointer text-[#999999] hover:fill-[#3182ED] hover:text-[#3182ED] `} fill="#999999"  /> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer