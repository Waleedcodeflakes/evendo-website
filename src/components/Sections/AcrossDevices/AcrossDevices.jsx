import React from 'react'
import evendoResponsive from '../../../assets/img/evendoResponsive.svg'


const AcrossDevices = () => {
  return (
    <section className='w-[92%] m-auto'>
        <div className='w-full block sm:flex items-center justify-between gap-[64px] py-10 pl-0 sm:pl-10'>
            <div className='w-full sm:w-[50%] border-l-[5px] border-[#f2f4f7] mb-[2rem] sm:mb-0'>
                <div className='pl-5 relative'>
                    <div className='h-full w-[5px] bg-[#3182ED] absolute left-[-5px] top-0'></div>
                <p className='poppins-medium text-sm text-[#3182ED]'>Seamless across devices</p>
                    <h3 className='my-5 poppins-semibold text-[24px] text-[#333]'>Works Everywhere</h3>
                    <p className='poppins-medium text-base text-[#333333CC]'>Coordinate on your phone, tablet, or desktop.</p>
                </div>
                <div className='pl-5'>
                    <h3 className='my-5 poppins-semibold text-[24px] text-[#333]'>Stay Connected</h3>
                    <p className='poppins-medium text-base text-[#333333CC]'>Access your events in real-time, no matter where you are.</p>
                </div>
                <div className='pl-5'>
                    <h3 className='my-5 poppins-semibold text-[24px] text-[#333]'>Plan Without Limits</h3>
                    <p className='poppins-medium text-base text-[#333333CC]'>Switch between devices effortlessly - your work stays in sync.</p>
                </div>
            </div>
            <div className='w-full sm:w-[50%] relative'>
            <div className="absolute w-[393px] h-[281px] top-0 right-5 rounded-full bg-[#A465FD66] blur-[214px]"></div>
                <img src={evendoResponsive} alt="media" />
            </div>
        </div>
    </section>
  )
}

export default AcrossDevices