import React from "react";

function Education() {
  const educations = {
    e1: {
      icon: "graduation icon.png",
      detail:
        "BCA (Batchelor of Computer Applications) from Govt. College Radaur (KUK University)",
    },
    e2: {
      icon: "hier education.png",
      detail: "12th (Non-Medical) from JNV Yamuna Nagar (CBSE)",
    },
    e3: {
      icon: "secondry education.png",
      detail: "10th Govt. Sr. Sec. School Chamrori (BSEH)",
    },
  };
  return (
    <div className=" bg-blue-50 py-10 m-0 px-5 md:px-20 mb-15 md:mb-20 rounded-lg">
      <h1 className="text-center text-3xl font-bold mt-10 mb-2 text-blue-700  ">
        Education
      </h1>
      <div className="flex flex-col md:flex-row items-center">
        <div>
          <div className="flex text-xl text-slate-600 flex-col gap-5">
            {Object.entries(educations).map(([key, education], index) => {
              return (
                <div key={index} className="flex items-center  gap-4 ">
                  <img
                    className="w-10"
                    src={`/images/${education.icon}`}
                    alt={education.icon}
                  />
                  <p>{education.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[100%] md:w-[40%] ">
          <img className="w-[80%] m-auto mix-blend-multiply"  src="public/images/edu.png" alt="education" />
        </div>
      </div>
    </div>
  );
}

export default Education;
