import React, { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from 'react-redux';
import { useSpring, animated } from "react-spring";
import { ProjectButton } from "./ProjectButton";
import { IProjectsInfos } from "../../utils/types";
import { StackInfos } from "./StacksInfos";

interface IProjectCardProps {
    infos: IProjectsInfos;
    setShowCard: Dispatch<SetStateAction<boolean>>;
    setProjectInfos: Dispatch<SetStateAction<IProjectsInfos>>;
}

function ProjectCard({ infos, setShowCard, setProjectInfos }: IProjectCardProps) {
    const theme = useSelector((state: any) => state.theme);

    const [show, setShown] = useState<boolean>(false);

    const styles = useSpring({
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show
        ? "0 20px 25px rgb(0 0 0 / 25%)"
        : "0 2px 10px rgb(0 0 0 / 8%)",
    });

    return (
        <animated.div
            className={`${theme.backgroundSidebar} flex flex-col justify-center px-[2rem] pb-[2rem] rounded-[.5rem]`}
            style={styles}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
        >
        <img 
            className="mt-[-20%] w-full rounded-[1.5rem]"
            src={infos.pictures[0]} alt={infos.name} 
        />
        <h2 className="mt-[1rem] text-[2.5rem] font-bold text-center" style={{color: `${theme.icon}`}}>{infos.name}</h2>
        <StackInfos stacks={infos.stacks} isCard />
        <div className="w-full flex items-center justify-end">
            <ProjectButton title="VOIR LE PROJET" infos={infos} setShowCard={setShowCard} setProjectInfos={setProjectInfos} />
        </div>
        </animated.div>
    );
}

export { ProjectCard };

