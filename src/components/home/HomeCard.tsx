import React from "react";
import { useSelector } from 'react-redux';
import { Button } from "../Button";
import { IButton, IRootState } from "../../utils/types";
import { buttonsInfos } from "../../utils/datas";
import { useTranslation } from 'react-i18next';
import { v4 } from "uuid";

function HomeCard(): JSX.Element {
  const { t } = useTranslation();
 const theme = useSelector((state: IRootState) => state.theme); 

  return (
    <div className={`p-[1rem] h-screen w-full ${theme.isToggle ? "bg-[url('../../public/images/homeBackgroundPurple.png')]" : "bg-[url('../../public/images/homeBackgroundBlue.png')]"} bg-no-repeat bg-cover`}>
      <div className="bg-transparent/5 rounded-[1rem] p-[1rem] w-[90%]">
        <p className="md:text-[5rem] text-[2rem]" style={{ color: `${theme.icon}`}}>
        {t('title')}
        </p>
        <p className="md:text-[3rem] text-[1.5rem]" style={{ color: `${theme.activeIcon}`}}>
          {t('subtitle')}
        </p>
        <div className="flex items-center justify-between space-x-[.5rem] pt-[3rem] pb-[.5rem] px-[.5rem]">
          {buttonsInfos(t).map((button: IButton) => (
            <div key={v4()}>
              <Button link={button}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { HomeCard };