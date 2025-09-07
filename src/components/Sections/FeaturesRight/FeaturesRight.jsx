import React from 'react'

const FeaturesRight = ({img, title, desc, smallText}) => {
  return (
    <section className='relative'>
        <div className='w-full block sm:flex items-center justify-between gap-[64px] relative'>
            <div className="absolute w-[293px] h-[281px] top-0 left-5 rounded-full bg-[#A465FD66] blur-[184px]"></div>
            <div className='w-full sm:w-[50%] flex flex-col justify-center relative mb-[2rem] sm:mb-0'>
                <p className='poppins-medium text-sm text-[#3182ED]'>{smallText}</p>
                <h3 className='poppins-semibold text-[30px] text-[#333]'>{title}</h3>
                <p className='poppins-medium text-[20px] text-[#333333CC]'>{desc}</p>
            </div>
            <div className='w-full sm:w-[50%]'>
                <img className='w-full' src={img} alt="image" />
            </div>
        </div>
    </section>
  )
}

export default FeaturesRight