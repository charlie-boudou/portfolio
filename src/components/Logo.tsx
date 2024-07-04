import React from "react";
import { useSelector } from 'react-redux';
import { CodeSquare } from "../assets/svgComponents";

function Logo(): JSX.Element {
  const theme = useSelector((state: any) => state.theme);

  return ( 
    <div className={`w-fit flex items-center space-x-[.5rem]`}>
        <CodeSquare className="w-[2rem] h-[2rem]" stroke={theme.icon}/>
        <p className="text-[1.5rem] font-bold logo" style={{color: `${theme.textContact}`}}>Charlie</p>
    </div>
  );
}

export { Logo };