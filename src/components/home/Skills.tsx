import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { skills } from "../../utils/datas";
import { IAbout, IRootState, ISkills, ITechnicalSkills } from '../../utils/types';
import { HandRight, Dot } from "../../assets/svgComponents";
import { v4 } from "uuid";
import { useTranslation } from 'react-i18next';

interface ISkillsProps {
    showSkillsCard: boolean;
}

function Skills({ showSkillsCard }: ISkillsProps): JSX.Element {
  const { t } = useTranslation();
 const theme = useSelector((state: IRootState) => state.theme); 

  useEffect(() => {
    if (showSkillsCard) {
      const items = document.querySelectorAll('.skill-item');

      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show-item', `delay-${index + 1}`);
        }, index * 100);
      });
    }
  }, [showSkillsCard]);

  return ( 
    <div className={`w-[90%] m-auto ${theme.backgroundSidebar} rounded-b-[1rem] p-[1rem]`}>
        {skills(t).map((item: ISkills) => (
            <div key={v4()} className="flex flex-col space-y-[1rem] pb-[2rem]">
                <div className="flex items-center space-x-[.5rem] skill-item w-full">
                    <HandRight fill={theme.icon} className="w-[1.5rem] h-[1.5rem]" />
                    <p className="text-[1.5rem] font-bold" style={{ color: `${theme.activeIcon}` }}>{item.name}</p>
                </div>
                <div className="flex md:flex-row flex-col md:space-x-[1rem] md:space-y-0 space-y-[1rem] md:justify-between w-full flex-wrap md:items-start md:flex-nowrap">
                    {item.description.map((el: IAbout | ITechnicalSkills) => {
                        if ('list' in el) {
                        return (
                            <div key={v4()} className="flex flex-col skill-item">
                              <div className="flex items-center space-x-[.5rem] pb-[.3rem]">
                                  <Dot fill={theme.icon} className="w-[1.5rem] h-[1.5rem]" />
                                  <p className="text-[1.2rem]" style={{ color: `${theme.icon}` }}>{el.name}</p>
                              </div>
                              {el.list.map((value: string) => (
                                  <div key={v4()} className={`${theme.textColor} pl-[.5rem]`}>{value}</div>
                              ))}
                            </div>
                        );
                        }
                        return (
                        <div key={v4()} className="md:w-[25%] w-full flex flex-col skill-item">
                            <div className="flex items-center space-x-[.5rem] pb-[.3rem]">
                              <Dot fill={theme.icon} className="w-[1.5rem] h-[1.5rem]" />
                              <p className="text-[1.2rem]" style={{ color: `${theme.icon}` }}>{el.name}</p>
                            </div>
                            <div className={`${theme.textColor} w-full`}>{el.description}</div>
                        </div>
                        );
                    })}
                </div>
            </div>
        ))}
    </div>
  );
}

export { Skills };
