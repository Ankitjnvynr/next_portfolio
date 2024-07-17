import React from 'react';
// Import Typewriter from your library or define it

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-transparent from-10% via-red-50 via-30% to-blue-100 py-10 m-0 px-5 md:px-20 mb-15 md:mb-20 rounded-lg md:flex items-center gap-5 min-h-[80vh]">
      <div className="flex flex-col gap-3">
        <h1 className="flex text-3xl md:text-5xl my-5 mt-10 font-bold">
          Hii I am
          <span className="text-blue-700 rounded-lg">&nbsp;Ankit, webdesigner</span>
        </h1>
        <h1 className="flex text-xl md:text-3xl my-3 font-bold">
          {" "}
          I am a&nbsp;
          <span className="text-blue-700">
            <Typewriter
              options={{
                strings: [
                  "Web Designer",
                  "Graphic Designer",
                  "Video Editor",
                  "Motion Graphic Artist",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p className="text-justify leading-6 text-lg text-slate-600">
          Welcome to my digital playground! I'm{" "}
          <span className="font-bold">Ankit</span>, a passionate web and graphic designer, as well as a skilled video editor and motion graphics enthusiast. With a keen eye for aesthetics and a love for storytelling, I bring ideas to life in the digital realm.
        </p>
        <div className="h-44 flex flex-col justify-center gap-7">
          <div className="flex items-center justify-center md:justify-start gap-3">
            {/* Adjust Button components as per your implementation */}
            <Button name={"My Resume"} targetBlank={"targetBlank"} link={"/Ankit Resume.pdf"} />
            <OutLinedButton name={"My work"} />
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            {/* Adjust social media icons as per your implementation */}
            {/* Example icons: */}
            {/* <FaFacebook className="cursor-pointer hover:text-blue-900 text-blue-700 text-3xl" />
            <FaInstagram className="cursor-pointer hover:text-blue-900 text-blue-700 text-3xl" />
            <FaTwitter className="cursor-pointer hover:text-blue-900 text-blue-700 text-3xl" />
            <FaWhatsapp className="cursor-pointer hover:text-blue-900 text-blue-700 text-3xl" /> */}
          </div>
        </div>
      </div>
      <div className="md:w-[50%] m">
        <img
          className="w-[100%]"
          src="/images/programmers.png"
          alt="/images/programmers.png"
        />
      </div>
    </div>
  );
}

export default HeroSection;
