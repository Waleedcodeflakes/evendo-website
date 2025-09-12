import React, { useRef, useState} from 'react'
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
  const questionRef = useRef(null);
  const [showSignup, setShowSignup] = useState(false);
  const [packageName, setPackageName] = useState('')

  return (
    <div>
      <Navbar setShowSignup={setShowSignup} />
      <Hero onScroll={() => targetRef.current.scrollIntoView({ behavior: "smooth" })} showSignup={showSignup} setShowSignup={setShowSignup} />
      <Challenges setShowSignup={setShowSignup} />
      <AllVendors/>
      <AcrossDevices setShowSignup={setShowSignup}/>
      <KeyFeatures/>
      <Adoption 
        heading="Easy Adoption for Vendors at no extra cost"
        text="Save up to 15+ hours per event by streamlining vendor coordination and management."
        btnText="See How it Works"
      />
      <div ref={targetRef}>
        <Demo/>
      </div>
      <Pricing setPackageName={setPackageName} onScroll={() => questionRef.current.scrollIntoView({ behavior: "smooth" })}  />
      <FAQs />
      <div  ref={questionRef}>
      <QuestionForm packageName={packageName} />
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage