import React from "react";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Logo } from "../components/Logo";

interface ILayoutProps {
  children: JSX.Element;
}
function Layout({ children }: ILayoutProps): JSX.Element {
  const theme = useSelector((state: any) => state.theme); 

  return (
    <div className={`md:flex w-full h-full ${theme.backgroundColor}`}>
        <Sidebar />
        <div 
            className={`${theme.backgroundColor} h-full w-full`}
            style={{ transition: 'background-color 0.5s ease-in-out'}}
        >
            <div className="flex items-center justify-end w-full p-[1rem]">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div>{children}</div>
        </div>
    </div>
  );
}

export { Layout };
