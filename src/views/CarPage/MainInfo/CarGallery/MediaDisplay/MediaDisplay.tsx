import { MouseEventHandler } from "react";
import Image from "next/image";

import { Media } from "@/shared/types/media";
import FavoriteBtn from "@/shared/components/Buttons/FavoriteBtn/FavoriteBtn";
import { getVideoThumbnail } from "@/shared/utils/getVideoThumbnail";

import PaginationButtons from "./PaginationButtons/PaginationButtons";
import cls from "./styles.module.scss";

interface MediaDisplayProps {
  currentMedia: Media;
  handleMainMediaClick: MouseEventHandler<HTMLDivElement>;
  currentIndex: number;
  temporarymMediaList: Media[];
  pageId: string;
  handlePrev: MouseEventHandler<HTMLButtonElement>;
  handleNext: MouseEventHandler<HTMLButtonElement>;
}

const MediaDisplay = ({
  currentMedia,
  handleMainMediaClick,
  currentIndex,
  temporarymMediaList,
  pageId,
  handlePrev,
  handleNext,
}: MediaDisplayProps) => {

  return (
    <div className={cls.mainMedia} onClick={handleMainMediaClick}>
      {currentMedia.type === "image" ? (
        <Image
          src={currentMedia.src}
          alt="Car"
          className={cls.mainImg}
          width={752}
          height={546}
        />
      ) : (
        <div className={cls.videoImgBlock}>
          <Image
            src={getVideoThumbnail(currentMedia.src)}
            alt="Thumbnail"
            width={752}
            height={546}
            className={cls.mainImg}
          />
          <div className={cls.mainVideoSvgBlock}>
            <p className="textMedium">video</p>
            <Image
              src="/icons/youtube.svg"
              alt="youtube icon"
              width={22}
              height={15}
            />
          </div>
        </div>
      )}
      <div className={cls.numeration}>
        <p className="textMedium">
          {currentIndex + 1} of {temporarymMediaList.length}
        </p>
      </div>

      <FavoriteBtn id={pageId} isCarPage />

      <PaginationButtons handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};

export default MediaDisplay;
