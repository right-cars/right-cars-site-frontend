import Image from "next/image";

import { Media } from "@/shared/types/media";
import {getYouTubeVideoID, getVideoThumbnail} from "@/shared/utils/getVideoThumbnail";

import cls from "../styles.module.scss";

const Thumbnail = ({
  media,
  index,
  currentIndex,
  handleMainMediaChange,
}: {
  media: Media;
  index: number;
  currentIndex: number;
  handleMainMediaChange: (index: number, e: React.MouseEvent) => void;
}) => {
  const isActive = index === currentIndex;

  return (
    <div
      key={index}
      className={`${cls.thumbnail} ${isActive ? cls.active : ""}`}
      onClick={(e) => handleMainMediaChange(index, e)}
    >
      {media.type === "image" ? (
        <Image
          src={media.src}
          alt="Thumbnail"
          width={178}
          height={112}
          className={cls.miniImg}
          unoptimized
        />
      ) : (
        <div className={cls.videoImgBlock}>
          <Image
            src={getVideoThumbnail(getYouTubeVideoID(media.src))}
            alt="Thumbnail"
            width={178}
            height={112}
            className={cls.miniImg}
            unoptimized
          />
          <Image
            src="/icons/youtube.svg"
            alt="youtube icon"
            width={50}
            height={35}
            className={cls.logoYoutube}
            unoptimized
          />
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
