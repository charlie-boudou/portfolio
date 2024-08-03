import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../../reducers/theme';
import { LightIcon } from "../../assets/svgComponents";
import { IRootState } from "../../utils/types";

  function ButtonTheme() {
    const dispatch = useDispatch();
   const theme = useSelector((state: IRootState) => state.theme); 

    const [isToggle, setIsToggle] = useState<boolean>(false);


    const handleClick = () => {
      setIsToggle(!isToggle);
      dispatch(switchTheme(!isToggle));
    };

    return (
      <div
        className={`relative  w-[3rem] md:w-[4.5rem] h-[1.5rem] md:h-[2rem] overflow-hidden rounded-[1rem] border ${theme.backgroundSidebar}`}
        style={{ transition: 'background-color 0.5s ease-in-out', borderColor: `${theme.icon}` }}
        onClick={handleClick}
      >
        <LightIcon 
          fill={`${theme.icon}`} 
          className={`absolute w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem] top-[-.1rem] ${isToggle ? 'left-[1.4rem] md:left-[2.45rem]' : 'left-0'}`}
          style={{ transition: 'left 0.5s', }}
        />
      </div>
    );
  }
  
  export { ButtonTheme };
  