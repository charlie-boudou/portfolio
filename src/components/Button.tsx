import React from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IButton } from "../utils/types";

interface IButtonProps {
    link: IButton;
}

  function Button({ link }: IButtonProps) {
    const theme = useSelector((state: any) => state.theme);

    const handleClick = (page: string) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScrollToAbout = () => {
        const aboutElement = document.getElementById(link.id ? link.id : '');
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    
            <div
                className="rounded-[.5rem] w-fit px-[1rem] py-[.5rem] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                style={{ backgroundColor: `${theme.icon}`}}
            >
                {link.page ? (
                    <Link to={link.link} onClick={() => handleClick(link.page ? link.page : '')}>
                        <p className="text-[1rem] font-bold" style={{color: `${theme.activeIcon}`}}>{link.name}</p>
                    </Link>
                ) : (
                    <div className="text-[1rem] font-bold" style={{color: `${theme.activeIcon}`}} onClick={handleScrollToAbout}>
                        {link.name}
                    </div>
                )}
            </div>
       
    );
  }
  
  export { Button };
  