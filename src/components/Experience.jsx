import React from "react";
import ProgressBar from "./ProgressBar";

function Experience() {
  let dob = new Date("2022-09-01");
  let day = dob.getDate();
  let month = dob.getMonth();
  let year = dob.getFullYear();

  const now = new Date();

  let yearDiff = now.getFullYear() - year;
  let monthDiff = now.getMonth() - month;
  let dateDiff = now.getDate() - day;

  if (yearDiff < 0) console.log("invalid date");
  else if (monthDiff > 0) {
    console.log(yearDiff);
  } else if (monthDiff === 0 && dateDiff >= 0) {
    console.log(yearDiff);
  } else {
    yearDiff = yearDiff - 1;
    if (monthDiff <= 0)
      if (dateDiff > 0) monthDiff = 12 + monthDiff;
      else monthDiff = 11 - monthDiff;
  }
  if (dateDiff < 0) {
    dateDiff = 30 + dateDiff;
    monthDiff -= 1;
  }

  if (yearDiff < 0) var innerHTML = "Invalid Date";
  else
    var calculatedExperience =
      yearDiff +
      (yearDiff > 1 ? " years " : " year ") +
      monthDiff +
      (monthDiff > 1 ? " months " : " month ");

  return (
    <div className=" bg-blue-50 py-10 m-0 px-5 md:px-20 mb-15 md:mb-20 rounded-lg">
      <h1 className="text-center text-3xl font-bold mt-6 mb-2  text-blue-700 ">
        Work Experience
      </h1>
      <div className="my-4 mb-14">
        <ProgressBar className="my-4 mb-14" tooltip={true} />
      </div>
      <div className="flex flex-col md:flex-row md:mb-24">
        <div className=" text-xl text-slate-700">
          <h2>
            <b>{calculatedExperience}</b> in Graphic and Web Designer
          </h2>
          at <b>BigByte Innovations Pvt. Ltd.</b> Kurukshetra,
          <br />
          from September 2022 to till now <br />
          <ul className="list-disc pl-5 text-justify">
            <li>
              Designed and developed visually appealing and user-friendly
              websites for clients across various industries.
            </li>
            <li>
              Translated client requirements into creative and functional
              designs, ensuring a seamless user experience.
            </li>
            <li>
              Collaborated with cross-functional teams including developers,
              content creators, and marketing specialists to achieve project
              goals.
            </li>
            <li>
              Created and optimized graphics, illustrations, and multimedia
              content for web and print materials.
            </li>
            <li>
              Implemented responsive design techniques to ensure consistent user
              experience across different devices.
            </li>
            <li>
              Conducted usability testing and gathered user feedback to iterate
              and improve designs.
            </li>
          </ul>
        </div>
        <div>
          <img src="/images/experience.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
