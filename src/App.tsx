import { 
  AboutSection,
   ContactSection,
   HeroSection, 
   PortofolioSection, 
   ServiceSection
 } from "./sections";
 import {
   Footer,
   Navbar 
 } from "./components";
 import ScrollSpy from "react-ui-scrollspy";


const App = () => {
  return (
    <main className="main">
          <Navbar/>
          <ScrollSpy 
            scrollThrottle={80} 
            activeClass="active-scroll-spy"
            useBoxMethod

          >
              <div id="home">
                <HeroSection/>
              </div>
              <div id="about">
                <AboutSection/>
              </div>
              <div id="service">
                <ServiceSection/>
              </div>
              <div id="portofolio">
                <PortofolioSection/>
              </div>
              <div id="contact">
                <ContactSection/>
              </div>
          </ScrollSpy>
          <Footer/>
    </main>
  )
}

export default App
