import React, { useRef} from 'react'
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
  const targetRef = useRef(null);
  return (
    <div>
      <Navbar/>
      <Hero onScroll={() => targetRef.current.scrollIntoView({ behavior: "smooth" })} />
      <Challenges/>
      <AllVendors/>
      <AcrossDevices/>
      <KeyFeatures/>
      <Adoption 
        heading="No Extra Cost for Vendors! Easy Adoption"
        text="Save up to 15+ hours per event by streamlining vendor communication and management."
        btnText="See How it Works"
      />
      <div ref={targetRef}>
        <Demo/>
      </div>
      <Pricing/>
      <FAQs />
      <QuestionForm/>
      <Footer/>
    </div>
  )
}

export default HomePage