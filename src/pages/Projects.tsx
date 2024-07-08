import React, { useEffect, useRef, useState } from "react";
import { CarouselProjects } from "../components/projects/CarouselProjects";
import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectInfos } from "../components/projects/ProjectInfos";
import { IProjectsInfos } from "../utils/types";
import { projectsInfos } from "../utils/datas";
import { useTranslation } from 'react-i18next';
import { v4 } from "uuid";

function Projects(): JSX.Element {
  const { t } = useTranslation();
  const projectInfosRef = useRef<HTMLDivElement>(null);

  const [showCard, setShowCard] = useState<boolean>(false);
  const [projectInfos, setProjectInfos] = useState<IProjectsInfos>({
    name: '',
    description: '',
    stacks: [],
    pictures: [],
    video: '',
    link: ''
});

  const cards = projectsInfos(t).map((element: IProjectsInfos) => {
    return { key: v4(), content: <ProjectCard infos={element} setShowCard={setShowCard} setProjectInfos={setProjectInfos} />};
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting && showCard) {
          timeoutId = setTimeout(() => {
            setShowCard(false);
          }, 1000);
        } else {
          clearTimeout(timeoutId);
        }
      },
      {
        threshold: 0.1, 
      }
    );

    if (projectInfosRef.current) {
      observer.observe(projectInfosRef.current);
    }

    return () => {
      if (projectInfosRef.current) {
        observer.unobserve(projectInfosRef.current);
      }
    };
  }, [projectInfosRef, showCard]);

  return (
    <div className="w-full flex flex-col">
      <CarouselProjects
        cards={cards}
      />
      {showCard && (
        <div id="projectInfos" ref={projectInfosRef} className="h-full w-full flex items-center">
          <ProjectInfos infos={projectInfos}/>
        </div>
      )}
    </div>
  );
}

export { Projects };