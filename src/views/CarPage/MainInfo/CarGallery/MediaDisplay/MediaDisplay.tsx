import { useEffect, useRef } from "react";
import Image from "next/image";

import { Media } from "@/shared/types/media";
import FavoriteBtn from "@/shared/components/Buttons/FavoriteBtn/FavoriteBtn";
import {
  getVideoThumbnail,
  getYouTubeVideoID,
} from "@/shared/utils/getVideoThumbnail";

import PaginationButtons from "./PaginationButtons/PaginationButtons";
import cls from "./styles.module.scss";

interface MediaDisplayProps {
  currentMedia?: Media;
  handleMainMediaClick: React.MouseEventHandler<HTMLDivElement>;
  currentIndex: number;
  temporarymMediaList: Media[];
  pageId: string;
  handlePrev: React.MouseEventHandler<HTMLButtonElement>;
  handleNext: React.MouseEventHandler<HTMLButtonElement>;
}

const MediaDisplay = ({
  // currentMedia,
  handleMainMediaClick,
  currentIndex,
  temporarymMediaList,
  pageId,
  handlePrev,
  handleNext,
}: MediaDisplayProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Логіка прокручування слайдів
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const slideWidth = container.clientWidth;
      // Скролл на відповідний слайд
      container.scrollTo({
        left: slideWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className={cls.mainMedia} onClick={handleMainMediaClick}>
      <div className={cls.scrollableSlides} ref={scrollRef}>
        {temporarymMediaList.map((media, index) => (
          <div className={cls.slide} key={index}>
            {media.type === "image" ? (
              <Image
                src={media.src}
                alt="Car"
                className={cls.mainImg}
                width={752}
                height={546}
                unoptimized
              />
            ) : media.type === "video" ? (
                <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeVideoID(media.src)}?playsinline=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={cls.videoFrame}
                ></iframe>
            ) : null}
          </div>
        ))}
      </div>

      <div className={cls.numeration}>
        <p className="textMedium">
          {currentIndex + 1} of {temporarymMediaList.length}
        </p>
      </div>

      <div className={cls.favoriteButton}>
        <FavoriteBtn id={pageId} isCarPage/>
      </div>

      <div className={cls.paginationButtons}>
        <PaginationButtons handlePrev={handlePrev} handleNext={handleNext} />
      </div>
    </div>
  );
};

export default MediaDisplay;
