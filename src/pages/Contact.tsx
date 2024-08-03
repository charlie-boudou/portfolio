import React from "react";
import { useSelector } from 'react-redux';
import { about } from "../utils/datas";
import { useTranslation } from 'react-i18next';
import { IRootState } from "../utils/types";

function Contact(): JSX.Element {
  const { t } = useTranslation();
 const theme = useSelector((state: IRootState) => state.theme); 

  const why = about(t).find((element) => element.name === "why");

  return (
    <div className={`p-[1rem] h-screen md:h-full w-full flex flex-col items-center ${theme.isToggle ? "bg-[url('../../public/images/homeBackgroundPurple.png')]" : "bg-[url('../../public/images/homeBackgroundBlue.png')]"} bg-no-repeat bg-auto md:bg-contain md:bg-right bg-center`}>
      <div
        className={`md:px-[3rem] md:py-[3rem] pb-[1rem] w-[90%] m-auto mb-[2rem] text-center border-[.2rem] rounded-[1rem]`}
        style={{borderColor: `${theme.icon}`}}
      >
        <div className="md:text-[2rem] md:w-[90%] md:m-auto text-justify p-[1rem] font-bold" style={{ color: `${theme.activeIcon}`}}>
          {why && why.description}
        </div>
        <p className="md:text-[5rem] text-[2rem] font-bold" style={{ color: `${theme.textContact}`}}>{t('youLike')}</p>
        <p className="md:text-[3rem] text-[1.8rem] pb-[.5rem]" style={{ color: `${theme.activeIcon}`}}>{t('contactMe')}</p>
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