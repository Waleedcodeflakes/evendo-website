import React from 'react'
import hub from '../../../assets/img/hub.svg'
import finance from '../../../assets/img/finance.svg'
import marketing from '../../../assets/img/marketing.svg'
import relationship from '../../../assets/img/relationship.svg'

const KeyFeatures = () => {
    const features = [
        {
            id: 1,
            icon: hub,
            title: "Vendor Communication Hub",
            bgColor: "#3B44B714",
            bullets: ["Unified inbox for all vendor conversations","Smart threading by event and vendor type","Alignment bucket to tag all agreed terms","Read receipts and approvals"]
        },
        {
            id: 2,
            icon: finance,
            title: "Financial Command Center",
            bgColor: "#EFF7F2",
            bullets: ["Real-time budget tracking per event","Centralized invoice organization","Payment deadline alerts","Vendor cost comparison tools within the same category "]
        },
        {
            id: 3,
            icon: marketing,
            title: "Marketing & Promotion",
            bgColor: "#72C2E924",
            bullets: ["Shared vendor contacts and notes","Task assignments and deadlines","Permission-based access control"]
        },
        {
            id: 4,
            icon: relationship,
            title: "Relationship History",
            bgColor: "#FFEFF5",
            bullets: ["Searchable vendor database","Performance ratings and notes","Past event collaboration records"]

        },
    ]
  return (
    <section className='my-30'>
        <div className='w-[92%] m-auto flex flex-col items-center justify-center mb-[44px]'>
            <h2 className='poppins-semibold text-[32px] text-[#333]'>Key Features to Streamline Your Events</h2>
            <p className='poppins-medium text-lg text-[#333333CC] w-[50%] text-center'>Plan smarter, manage seamlessly, and deliver events with confidence.<br/> Our platform brings every tool you need into one place.</p>
        </div>
        {/* features grid */}
        <div className='w-[92%] m-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'>
            {features.map((feature) => (
                <div key={feature.id} className="flex flex-col items-start gap-6 py-5 px-6 rounded-[12px]" style={{backgroundColor: feature.bgColor}}>
                    <img className='w-10 h-10' src={feature.icon} alt={feature.title} />
                    <h3 className='poppins-medium text-[20px] text-[#333333E5]'>{feature.title}</h3>
                    <ul className='list-disc list-inside poppins-regular text-[#333333CC] text-base w-[60%]'>
                        {feature.bullets.map((bullet, index) => (
                            <li key={index} className='mb-2'>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
  )
}

export default KeyFeatures