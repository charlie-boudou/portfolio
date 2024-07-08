import Carousel from "react-spring-3d-carousel";
import React, { useState } from "react";
import { config } from "react-spring";
import { IProjectCard } from "../../utils/types";

interface ICarouselProjectsProps {
    cards: IProjectCard[],
}

function CarouselProjects({ cards }: ICarouselProjectsProps) {
    const table = cards.map((element: IProjectCard, index: number) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [goToSlide, setGoToSlide] = useState<number>(0);
    const [card] = useState(table);

    return (
        <div className="w-full md:p-[3rem] h-screen flex items-center">
            <div
                className={`md:w-[80%] mx-auto w-full`}
            >
                <Carousel
                    slides={card}
                    goToSlide={goToSlide}
                    offsetRadius={1}
                    showNavigation={true}
                    animationConfig={config.gentle}
                />
            </div>
        </div>
    );
}

export { CarouselProjects };