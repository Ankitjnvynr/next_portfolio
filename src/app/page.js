import AboutSection from "@/components/AboutSection";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import MyWork from "@/components/MyWork";
import Skills from "@/components/Skills";
import WebsiteProjects from "@/components/WebsiteProjects";



export default function Home() {
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
    </>
  );
}
