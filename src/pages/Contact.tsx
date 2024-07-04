import React from "react";
import { useSelector } from 'react-redux';
import { about } from "../utils/datas";

function Contact(): JSX.Element {
  const theme = useSelector((state: any) => state.theme);

  const why = about.find((element) => element.name === "why");

  return (
    <div className={`p-[1rem] h-screen md:h-full w-full flex flex-col items-center`}>
      <div
        className={`md:px-[3rem] md:py-[6rem] pb-[1rem] w-[90%] m-auto text-center border-[.2rem] rounded-[1rem]`}
        style={{borderColor: `${theme.icon}`}}
      >
        <div className="md:text-[2rem] md:w-[90%] md:m-auto text-justify p-[1rem]" style={{ color: `${theme.activeIcon}`}}>
          {why && why.description}
        </div>
        <p className="md:text-[5rem] text-[2rem]" style={{ color: `${theme.textContact}`}}>Mon profil vous plaît ?</p>
        <p className="md:text-[3rem] text-[1.8rem] pb-[.5rem]" style={{ color: `${theme.activeIcon}`}}>Surtout n'hésitez pas à me contacter !</p>
        <a 
          href="mailto:charlie.lcb3@gmail.com"
          className="md:text-[2rem] text-[1.5rem]" 
          style={{ color: `${theme.icon}`}}
        >
          charlie.lcb3@gmail.com
        </a>
      </div>
    </div>
  );
}

export { Contact };