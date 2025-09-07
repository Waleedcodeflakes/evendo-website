import React from 'react'
import question from '../../../assets/icons/circle-ques.svg'
import tick from '../../../assets/icons/tick-circle.svg'
import curve from '../../../assets/icons/curveLine.svg'
import curveLeft from '../../../assets/icons/curveLeft.svg'


const Challenges = () => {

    const challenges = [
        {
            id: 1,
            text: "Juggling between spreadsheets, emails, WhatsApp, and other tools to get your tasks streamlined?",
            type: 'meidium'
        },
        {
            id: 2,
            text: "Manually tracking which vendors confirmed, which need follow-up, and which payments are overdue?",
            type: 'meidium'
        },
        {
            id: 3,
            text: "Starting from scratch for every new event because vendor history is scattered everywhere?",
            type: 'danger'
        },
        {
            id: 4,
            text: "Multiple follow-ups to get full visibility of the budget?",
            type: 'success'
        },
        {
            id: 5,
            text: "Emails and spreadsheets to manage stakeholders and keep them informed of event progress?",
            type: 'success'
        },
    ]
    const solutions = [
        {
            id: 1,
            text: "Consolidated platform to track budget, invoices, maintain vendor profiles and manage seamless communication.",
            type: 'meidium'
        },
        {
            id: 2,
            text: "Our platform streamlines your communication with vendors with periodic notifications to keep you on track.",
            type: 'meidium'
        },
        {
            id: 3,
            text: "Easy handover between team members, as all vendor information is consolidated.",
            type: 'danger'
        },
        {
            id: 4,
            text: "Budget tracker with visibility to all relevant stakeholders to keep everyone on the same page.",
            type: 'success'
        },
        {
            id: 5,
            text: "Visibility of event progress via dashboard. Better transparency.",
            type: 'success'
        },
    ]
   
  return (
    <section className='w-[92%] m-auto relative'>
        <div className=" w-full h-full overflow-x-hidden">
        <div className="absolute w-[393px] h-[281px] top-0 right-0 rounded-full bg-[#A465FD66] blur-[184px]"></div>
        </div>
        {/* channelges and solutions */}
        <div className='w-full flex items-center justify-between py-30 gap-4'>
            <div className='w-[43%]'>
                <h2 className='poppins-semibold text-[32px] text-[#333]'>The Challenges You Face</h2>
                {challenges.map((challenge) => (
                    <div key={challenge.id} className={`rounded-[12px] min-h-[118px] px-4 py-3 flex items-start mt-7 justify-start ${challenge.type === 'meidium' ? 'bg-[#EAE7F9]' : challenge.type === 'danger' ? 'bg-[#ED00591F]' : 'bg-[#17C6661F]'}`}>
                        <div className='flex gap-2 items-start py-4'>
                            <img src={question} alt="icon" />
                        <p className='text-lg poppins-regular text-[#333333CC] w-[85%]'>{challenge.text}</p>
                        </div>
                    </div>
                ))} 
            </div>
            <div className='w-[17%] flex flex-col items-between justify-between mt-26' style={{height: '-webkit-fill-available'}}>
                <img className='h-[97px] w-[218px] py-0' src={curve} alt="curve line" />
                <img className='h-[97px] w-[218px] py-0' src={curveLeft} alt="curve line" />
                <img className='h-[97px] w-[218px] py-0' src={curve} alt="curve line" />
                <img className='h-[97px] w-[218px] py-0' src={curveLeft} alt="curve line" />
                <img className='h-[97px] w-[218px] py-0' src={curve} alt="curve line" />
            </div>
            <div className='w-[43%]'>
                <h2 className='poppins-semibold text-[32px] text-[#333]'>How Evendo Transforms Them</h2>
                {solutions.map((challenge) => (
                    <div key={challenge.id} className={`rounded-[12px] min-h-[118px] px-4 py-3 flex items-start mt-7 justify-start ${challenge.type === 'meidium' ? 'bg-[#EAE7F9]' : challenge.type === 'danger' ? 'bg-[#ED00591F]' : 'bg-[#17C6661F]'}`}>
                        <div className='flex gap-2 items-start py-4'>
                            <img src={tick  } alt="icon" />
                        <p className='text-lg poppins-regular text-[#333333CC]'>{challenge.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    </section>
  )
}

export default Challenges