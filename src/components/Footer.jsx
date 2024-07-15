import React from 'react';

function Footer() {
  let mainMenus = {
    Home: '/',
    About: '#',
    'Hire Me': '#',
    'My work': '#',
  };
  let SocialLinks = {
    Git: '#',
    Linkedin: '#',
    Facebook: '#',
    Instagram: '#',
  };

  return (
    <>
      <div className="flex justify-between">
        <ul>
          <p className="text-blue-300 font-bold">Main Menus</p>
          {Object.entries(mainMenus).map((menu) => {
            let link = menu[1];
            let name = menu[0];
            return (
              <li key={name}>
                <a className=" cursor-pointer font-thin" href={link}>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        
        <ul className="text-right">
          <p className="text-blue-300 font-bold">Social Link</p>
          {Object.entries(SocialLinks).map((menu) => {
            let link = menu[1];
            let name = menu[0];
            return (
              <li key={name}>
                <a className=" cursor-pointer" href={link}>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <hr className="my-3" />
      <p className="text-center text-blue-300">All right reseved &copy;</p>
    </>
  );
}

export default Footer;
