"use client";

import { useState } from "react";

import Image from "next/image";

import cls from "./styles.module.scss";

export default function VideoBlock() {
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);

  const videoId = "vlDOjTaaEdA";

  const handlePlay = () => {
    setIsVideoVisible(true);
  };

  return (
    <div className={cls.videoContainer}>
      {!isVideoVisible ? (
        <div className={cls.thumbnail} onClick={handlePlay}>
          <Image
            src="/icons/youtube.svg"
            alt="youtube icon"
            width={71}
            height={50}
            className={cls.absoluteSvg}
          />
          <Image
            src="/images/home/about/video.webp"
            alt="Video Thumbnail"
            width={460}
            height={288}
            className={cls.videoImg}
          />
        </div>
      ) : (
        <div className={cls.video}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      )}
    </div>
  );
}
