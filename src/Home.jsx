import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import MyWork from './components/MyWork';
import WebsiteProjects from './components/WebsiteProjects';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <div className="max-w-[1300px] w-[95%] m-auto bg-white shadow-lg my-4 rounded-xl overflow-hidden ">
        
        {/* <Social /> */}
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Education />
        <MyWork />
        <WebsiteProjects />

      </div>
      <div className="max-w-[1300px] w-[95%] m-auto text-white  my-4 rounded-xl overflow-hidden ">
        
      </div>
    </>
  );
}

export default Home;
