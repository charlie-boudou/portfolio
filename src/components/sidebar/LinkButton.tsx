import React, { cloneElement, useEffect, useState } from 'react';
import { ISidebarLink } from '../../utils/types';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
  
interface ILinkButtonProps {
  navLink: ISidebarLink;
}

function LinkButton({ navLink }: ILinkButtonProps): JSX.Element {
  const location = useLocation();
  const { theme } = useSelector((state: any) => ({theme: state.theme }));

  const[pathName, setPathName] = useState<string>('');

  const iconWithProps = cloneElement(navLink.icon as JSX.Element, {
    fill: `${navLink.name === 'linkedin' || navLink.name === 'git' ? `${theme.icon}` : 'none'}`,
    stroke: pathName === navLink.link ? theme.activeIcon : theme.icon,
    className: `w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem] cursor-pointer`
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);

  return (
    <div>
      {navLink.name === 'linkedin' || navLink.name === 'git' ? (
        <a href={navLink.link} target='_blank'>
          {iconWithProps} 
        </a>
      ) : (
        <Link to={navLink.link} onClick={() => handleClick()}>
          {iconWithProps}
        </Link>
      )}
    </div>
  );
}
  
export { LinkButton };
