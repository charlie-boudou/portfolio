import React, { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';
import { ProjectButton } from "../projects/ProjectButton";
import { Skills } from "./Skills";
import { about } from "../../utils/datas";
import { IAbout } from '../../utils/types';
import { v4 } from "uuid";

function About(): JSX.Element {
  const theme = useSelector((state: any) => state.theme);
  const skillsCardRef = useRef<HTMLDivElement>(null);

  const [showSkillsCard, setShowSkillsCard] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (showSkillsCard && skillsCardRef.current) {
        skillsCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 50);
  }, [showSkillsCard]);
  
  return (
    <div id="about" className="h-full w-full py-[1rem]">
      <div className={`w-[90%] m-auto ${theme.backgroundSidebar} p-[1rem] ${!showSkillsCard ? 'rounded-[1rem]' : 'rounded-t-[1rem]'}`}>
        <div className="w-full flex md:flex-row flex-col items-start md:space-x-[1.5rem]">
            <img
              src="images/me.png"
              className="rounded-[1rem] md:w-[50%] w-full"
              alt="Me"
            />
            <div className={`md:w-[50%] w-full p-[.5rem] flex flex-col justify-between`}>
              {about.map((item: IAbout) => {
                if(item.name !== 'why') {
                  return (
                    <div key={v4()} className={`text-[1.5rem] ${theme.textColor} md:text-justify pb-[1rem]`}>
                      {item.description}
                    </div>
                  )
                }
              })}
              <div className="w-full flex items-center justify-end pt-[1rem]">
                <ProjectButton title="MES COMPÉTENCES" setShowCard={setShowSkillsCard} />
              </div>
            </div>
        </div>
      </div>
      {showSkillsCard && (
        <div ref={skillsCardRef}>
          <Skills showSkillsCard={showSkillsCard} />
        </div>
      )}
    </div>
  );
}

export { About };