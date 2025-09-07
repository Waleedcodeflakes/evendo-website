import React from 'react'
import video from '../../../assets/img/videoBg.svg'
import play from '../../../assets/img/play.svg'

const Demo = () => {
  return (
    <section className='w-[92%] m-auto my-30'>
        <div className='w-full text-center'>
            <h2 className='poppins-semibold text-[32px] text-[#333]'>Watch Demo</h2>
            <p className='poppins-medium text-[18px] text-[#333333CC]'>See how effortless event management can be.</p>
        </div>
        <div className='w-full relative mt-[44px]'>
            <div className='absolute bg-[#0000004D] w-full h-full backdrop-blur-[16px]'></div>
                <img className='w-full' src={video} alt="video" />
            <button className='absolute top-[35%] sm:top-[40%] left-[40%] sm:left-[45%]'>
                <img className='bg-white  rounded-full w-[50%] sm:w-full' src={play} alt="icon" />
            </button>
        </div>
    </section>
  )
}

export default Demo