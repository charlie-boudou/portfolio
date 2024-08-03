import React, { Dispatch, SetStateAction } from "react";
import { useSelector } from 'react-redux';
import { IProjectsInfos, IRootState } from "../../utils/types";
import { ArrowIcon } from '../../assets/svgComponents';

interface IProjectButtonProps {
    title: string;
    infos?: IProjectsInfos;
    setShowCard: Dispatch<SetStateAction<boolean>>;
    setProjectInfos?: Dispatch<SetStateAction<IProjectsInfos>>;
}

  function ProjectButton({ title, infos, setShowCard, setProjectInfos }: IProjectButtonProps) {
    const theme = useSelector((state: IRootState) => state.theme); 

    const handleClick = async() => {
        await setShowCard(true);
        if (setProjectInfos && infos) {
            await setProjectInfos(infos);
            const infosElement = document.getElementById('projectInfos');
            if (infosElement) {
                infosElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
    
            <div
                className={`border rounded-[.5rem] flex items-center space-x-[.5rem] w-fit px-[1rem] py-[.5rem] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
                style={{ borderColor: `${theme.icon}` }}
                onClick={handleClick}
            >
                <div className="text-[1rem] font-bold" style={{color: `${theme.icon}`}} >
                    {title}
                </div>
                <ArrowIcon className="w-[1.5rem] h-[1.5rem]" fill={`${theme.icon}`} />
            </div>
       
    );
  }
  
  export { ProjectButton };