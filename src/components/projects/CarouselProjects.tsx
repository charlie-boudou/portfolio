import Carousel from "react-spring-3d-carousel";
import React, { useState } from "react";
import { config } from "react-spring";
import { IProjectCard } from "../../utils/types";
import { useSelector } from 'react-redux';

interface ICarouselProjectsProps {
    cards: IProjectCard[],
}

function CarouselProjects({ cards }: ICarouselProjectsProps) {
    const theme = useSelector((state: any) => state.theme);

    const table = cards.map((element: IProjectCard, index: number) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [goToSlide, setGoToSlide] = useState<number>(0);
    const [card] = useState(table);

    return (
        <div className="w-full md:p-[3rem] h-screen flex flex-col items-center justify-center relative">
            <div
                className={`md:w-[80%] mx-auto w-full`}
            >
                <Carousel
                    slides={card}
                    goToSlide={goToSlide}
                    offsetRadius={1}
                    showNavigation={false}
                    animationConfig={config.gentle}
                />
            </div>
            <div className="block md:hidden absolute bottom-[2.5rem] flex space-x-[.5rem]">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setGoToSlide(index)}
                        className="p-[.5rem] rounded-full transition-colors duration-300"
                        style={{ backgroundColor: `${goToSlide === index ? `${theme.icon}` : 'rgb(156 163 175)'}`}}
                    />
                ))}
            </div>
        </div>
    );
}

export { CarouselProjects };