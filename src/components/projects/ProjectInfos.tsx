import React from "react";
import { useSelector } from 'react-redux';
import { IProjectsInfos } from "../../utils/types";
import { CarouselPictures } from "./CarouselPictures";
import { ArrowIcon } from '../../assets/svgComponents';
import { StackInfos } from "./StacksInfos";
import { useTranslation } from 'react-i18next';

interface IProjectInfosProps {
    infos: IProjectsInfos
}

function ProjectInfos({ infos }: IProjectInfosProps): JSX.Element {
  const { t } = useTranslation();
  const theme = useSelector((state: any) => state.theme);

  return (
    <div className="h-full w-full px-[1rem] py-[2rem]">
      <CarouselPictures pictures={infos.pictures} video={infos.video}/>
      <div className="flex md:flex-row flex-col space-y-[1rem] md:space-x-[1rem] md:items-center md:justify-between my-[1.5rem] w-full">
        <div className={`text-[1.2rem] ${theme.textColor} text-justify md:w-1/2 w-full pt-[1rem] md:pl-[1rem]`}>
            {infos.description}
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center md:items-center space-y-[2rem]">
          <div className="flex md:flex-row flex-col md:items-center md:space-x-[1rem]">
            <StackInfos stacks={infos.stacks} isCard={false} />
          </div>
          <a href={infos.link} target="_blank" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-[1rem] flex items-center space-x-[.5rem] border-[.1rem] w-fit rounded-[.5rem] p-[.5rem]" style={{borderColor: `${theme.icon}`}}>
            <p style={{color: `${theme.icon}`}}>{t('goTo')}</p>
            <ArrowIcon className="w-[1.5rem] h-[1.5rem]" fill={theme.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export { ProjectInfos };