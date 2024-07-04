import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight } from "../../assets/svgComponents";

interface ICarouselPicturesProps {
    pictures: string[];
    video: string;
}

function CarouselPictures({ pictures, video }: ICarouselPicturesProps): JSX.Element {
  const theme = useSelector((state: any) => state.theme);

  const [index, setIndex] = useState<number>(0);
  const [isVideo, setIsVideo] = useState<boolean>(false);
  const [carouselLength, setCarouselLength] = useState<number>(0);

  const handleClickPicture = (i: number) => {
    setIsVideo(false);
    setIndex(i);
  };

  useEffect(() => {
    setCarouselLength(video !== '' ? pictures.length : pictures.length - 1);
  }, [video, pictures]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="rounded-[.5rem] px-[1rem] mb-[2rem]">
        {isVideo && video !== '' ? (
          <video
            className="rounded-[.5rem] max-w-screen max-h-[20rem] md:max-w-[45rem] md:max-h-[45rem]"
            controls
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/mp4" />
            <track kind="captions" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        ) : (
          <img
            src={pictures[index]}
            className="rounded-[.5rem] max-w-screen max-h-[20rem] md:max-w-[45rem] md:max-h-[45rem]"
            alt="project image"
          />
        )}
      </div>
      <div className="w-full flex items-center space-x-[.5rem] md:justify-center">
        <ChevronLeft
          className="cursor-pointer w-[2.5rem] h-[2.5rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          stroke={theme.icon}
          onClick={() => {
            setIsVideo(false);
            setIndex(index > 0 ? index - 1 : index);
          }}
        />
        <div className="flex items-center space-x-[.5rem] flex-wrap justify-center">
          {pictures.map((picture: string, i: number) => (
            <img
              key={i}
              onClick={() => handleClickPicture(i)}
              src={picture}
              alt="project"
              className="object-fill mb-[.5rem] md:mb-0 rounded-[1rem] w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] cursor-pointer border-[.2rem] border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            />
          ))}
          {video !== '' && (
            <video
              className="object-fill rounded-[1rem] w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] cursor-pointer border-[.2rem] border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              controls
              muted
              onClick={() => {
                setIndex(carouselLength);
                setIsVideo(true);
              }}
            >
              <source src={video} type="video/mp4" />
              <track kind="captions" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          )}
        </div>
        <ChevronRight
          className="cursor-pointer w-[2.5rem] h-[2.5rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          stroke={theme.icon}
          onClick={() => {
            setIsVideo(index === carouselLength - 1);
            setIndex(index < carouselLength ? index + 1 : index);
          }}
        />
      </div>
    </div>
  );
}

export { CarouselPictures };
