import React, { useState } from "react";
import { useSelector } from 'react-redux';

interface IStackInfosProps {
    stacks: string[];
    isCard: boolean;
}

function StackInfos({ stacks, isCard }: IStackInfosProps): JSX.Element {
  const theme = useSelector((state: any) => state.theme);

  return (
    <>
        <p className={`${isCard ? 'mt-[1.5rem] mb-[1rem] text-[1rem] md:text-[1.5rem]' : 'text-[2rem]'} font-bold`} style={{color: `${theme.activeIcon}`}}>
            STACKS:
        </p>
        <div className={`${isCard ? 'flex-col space-y-[1rem]' : 'items-center space-x-[1rem]'} flex`}>
            {stacks.map((stack: string) => (
                <div className="rounded-[.5rem] py-[.5rem] px-[1rem] border-[.15rem] w-fit font-bold" style={{color: `${theme.icon}`, borderColor: `${theme.activeIcon}`}}>
                    {stack}
                </div>
            ))}
        </div>
    </>      
  );
}

export { StackInfos };