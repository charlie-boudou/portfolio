import React from "react";
import { sidebarLinks, sidebarBottomLinks } from '../../utils/datas';
import { useSelector } from 'react-redux';
import { ISidebarLink } from "../../utils/types";
import { LinkButton } from "./LinkButton";
import {ButtonTheme } from "./ButtonTheme";

function Sidebar(): JSX.Element {
  const { theme } = useSelector((state: any) => ({ theme: state.theme }));

  return (
    <div
        className={`w-full md:w-fit md:h-screen md:sticky md:top-0 ${theme.backgroundSidebar} px-[.5rem] md:px-[1rem] py-[1rem] md:py-[2rem] flex md:flex-col items-center justify-between`}
        style={{ transition: 'background-color 0.5s ease-in-out'}}
    >
      <ButtonTheme/>
      <div className="flex md:flex-col items-center space-x-[1rem] md:space-y-[1rem] md:space-x-0">
        {sidebarLinks().map((navLink: ISidebarLink) => (
          <div key={navLink.name}>
            <LinkButton navLink={navLink} />
          </div>
        ))}
      </div>
      <div className="flex md:flex-col items-center space-x-[.5rem] md:space-y-[1rem] md:space-x-0">
        {sidebarBottomLinks().map((navLink: ISidebarLink) => (
          <div key={navLink.name}>
            <LinkButton navLink={navLink} />
          </div>
        ))}
      </div>
    </div>
  );
}

export { Sidebar };
