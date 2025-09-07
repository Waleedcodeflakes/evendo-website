import React from 'react'
import Navbar from '../../Sections/Navbar/Navbar';
import Hero from '../../Sections/Hero/Hero';
import Challenges from '../../Sections/Challenges/Challenges';
import AllVendors from '../../Sections/AllVendors/AllVendors';
import AcrossDevices from '../../Sections/AcrossDevices/AcrossDevices';
import KeyFeatures from '../../Sections/KeyFeatures/KeyFeatures';
import Adoption from '../../Sections/Adoption/Adoption';
import Demo from '../../Sections/Demo/Demo';
import Pricing from '../../Sections/Pricing/Pricing';
import FAQs from '../../Sections/FAQs/FAQs';
import QuestionForm from '../../Sections/QuestionForm/QuestionForm';
import Footer from '../../Sections/Footer/Footer';


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Challenges/>
      <AllVendors/>
      <AcrossDevices/>
      <KeyFeatures/>
      <Adoption/>
      <Demo/>
      <Pricing/>
      <FAQs />
      <QuestionForm/>
      <Footer/>
    </div>
  )
}

export default HomePage