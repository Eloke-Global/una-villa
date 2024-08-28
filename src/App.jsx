import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Header from "./components/Header"
import OurStory from "./components/OurStory"
import PeopleBehind from "./components/PeopleBehind"
import CallUs from "./components/CallUs"
import Explore from "./components/Explore"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import MobileHeader from "./components/MobileNavBar"
function App() {
  return (
    <div className="text-[#312429]">
      <Hero/>
      <div className="sticky top-[68px] lg:top-0 z-[99]">
        <MobileHeader/>
        <Marquee/>
        <Header/>
      </div>
      <OurStory/>
      {/* <PeopleBehind/> */}
      <Menu/>
      <CallUs/>
      {/* <Explore/> */}
      <Gallery/>
      <Contact/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
